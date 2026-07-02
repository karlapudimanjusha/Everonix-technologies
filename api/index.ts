import express from 'express';
import { z } from "zod";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import cors from "cors";

const app = express();

// Helmet middleware to set secure HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://*.trycloudflare.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https://*"],
        connectSrc: ["'self'", "https://*.trycloudflare.com", "wss://*.trycloudflare.com"],
      },
    },
  })
);

app.use(express.json({ limit: "15kb" }));

// Configure CORS middleware to accept specified Client Origin
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type", "x-api-key"],
  })
);

// Configure rate limiting on all API endpoints
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: { error: "Too many requests from this IP, please try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api/", apiLimiter);

// Middleware to validate Client API Key
const validateApiKey = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const apiKey = req.headers["x-api-key"];
  const expectedKey = process.env.API_KEY || "everonix_secure_api_key_2026";
  
  if (!apiKey || apiKey !== expectedKey) {
    res.status(401).json({ error: "Unauthorized access: Invalid or missing API key." });
    return;
  }
  next();
};
app.use("/api/", validateApiKey);

// Zod Validation Schemas for public endpoints
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9\s\-()]{7,20}$/, "Invalid phone number format"),
  company: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(5, "Message must be at least 5 characters").max(2000),
});

const applySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9\s\-()]{7,20}$/, "Invalid phone number format"),
  role: z.string().min(2, "Role must be at least 2 characters").max(100),
  message: z.string().min(5, "Message must be at least 5 characters").max(2000),
});

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

app.post("/api/v1/contact", (req, res) => {
  try {
    contactSchema.parse(req.body);
    // Redact PII (name, email, phone) from log outputs to be GDPR compliant
    console.log("Contact submission received: Payload validated successfully. [PII Redacted]");
    res.status(200).json({ success: true, message: "Contact message received successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.issues[0].message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

app.post("/api/v1/apply", (req, res) => {
  try {
    const validated = applySchema.parse(req.body);
    // Redact PII from logs
    console.log("Job application received: Payload validated successfully for role:", validated.role, "[PII Redacted]");
    res.status(200).json({ success: true, message: "Application received successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.issues[0].message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

app.post("/api/v1/newsletter", (req, res) => {
  try {
    newsletterSchema.parse(req.body);
    // Redact PII from logs
    console.log("Newsletter subscription received: Payload validated successfully. [PII Redacted]");
    res.status(200).json({ success: true, message: "Subscription received successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.issues[0].message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

export default app;
