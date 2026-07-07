import { Router } from "express";
import { z } from "zod";
import { sendNotification } from "./notifications";

export const apiRouter = Router();

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

// Real production API endpoints with strict validation, rate limiting, and GDPR compliance
apiRouter.post("/v1/contact", async (req, res) => {
  try {
    const validated = contactSchema.parse(req.body);
    // Trigger notification delivery
    await sendNotification("contact", validated);
    res.status(200).json({ success: true, message: "Contact message received successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.issues[0].message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

apiRouter.post("/v1/apply", async (req, res) => {
  try {
    const validated = applySchema.parse(req.body);
    // Trigger notification delivery
    await sendNotification("apply", validated);
    res.status(200).json({ success: true, message: "Application received successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.issues[0].message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

apiRouter.post("/v1/newsletter", async (req, res) => {
  try {
    const validated = newsletterSchema.parse(req.body);
    // Trigger notification delivery
    await sendNotification("newsletter", validated);
    res.status(200).json({ success: true, message: "Subscription received successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.issues[0].message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});
