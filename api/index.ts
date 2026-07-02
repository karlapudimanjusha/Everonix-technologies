import express from 'express';

const app = express();
app.use(express.json());

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

app.all("*", (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

export default app;
