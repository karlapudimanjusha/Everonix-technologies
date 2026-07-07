import app from "../shared/app";

// Wildcard fallback for API requests that don't match any route
app.all("*", (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

export default app;
