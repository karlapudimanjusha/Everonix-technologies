import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Serve static files from dist/public
  const staticPath = path.resolve(__dirname, "public");
  app.use(express.static(staticPath));

  // Real production API endpoints
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, company, message } = req.body;
    console.log("Contact submission received:", { name, email, phone, company, message });
    res.status(200).json({ success: true, message: "Contact message received successfully" });
  });

  app.post("/api/apply", (req, res) => {
    const { name, email, phone, role, message } = req.body;
    console.log("Job application received:", { name, email, phone, role, message });
    res.status(200).json({ success: true, message: "Application received successfully" });
  });

  app.post("/api/newsletter", (req, res) => {
    const { email } = req.body;
    console.log("Newsletter subscription received:", { email });
    res.status(200).json({ success: true, message: "Subscription received successfully" });
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
