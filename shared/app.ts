import express from "express";
import helmet from "helmet";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import { apiRouter } from "./api";

const app = express();

// Trust reverse proxy (Vercel, Cloudflare, etc.) to read correct req.ip for rate limits
app.set("trust proxy", 1);

// Configure dynamic Content Security Policy (CSP) directives
const getCspDirectives = () => {
  const directives: any = {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    imgSrc: ["'self'", "data:", "https://*"],
    connectSrc: ["'self'"],
  };

  const analyticsUrl = process.env.VITE_ANALYTICS_ENDPOINT;
  if (analyticsUrl) {
    try {
      const url = new URL(analyticsUrl);
      const origin = url.origin;
      directives.scriptSrc.push(origin);
      directives.connectSrc.push(origin);
    } catch (e) {
      // Ignore malformed URL
    }
  }

  // Fallback defaults for Umami analytics domains
  directives.scriptSrc.push("https://*.umami.is");
  directives.connectSrc.push("https://*.umami.is");

  return directives;
};

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: getCspDirectives(),
    },
  })
);

app.use(express.json({ limit: "15kb" }));

// Configure CORS middleware to accept specified Client Origin
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type"],
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

// Mount API Router
app.use("/api", apiRouter);

export default app;
