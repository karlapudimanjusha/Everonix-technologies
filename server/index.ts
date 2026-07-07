import app from "../shared/app";
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from compiled public output directory (dist/public)
const staticPath = path.resolve(__dirname, "public");
app.use(express.static(staticPath));

// Handle client-side routing - serve index.html for all other routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

const server = createServer(app);
const port = process.env.PORT || 3000;

const serverInstance = server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

// Graceful Shutdown handling to avoid hanging connections on deployment rollouts
const gracefulShutdown = () => {
  console.log("SIGTERM/SIGINT signal received. Shutting down gracefully...");
  serverInstance.close(() => {
    console.log("HTTP server closed.");
    process.exit(0);
  });

  // Force shutdown after 10s if connections persist
  setTimeout(() => {
    console.error("Could not close connections in time, forcefully shutting down.");
    process.exit(1);
  }, 10000);
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
