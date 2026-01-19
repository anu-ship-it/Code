import express from 'express';
import { sendMail } from "./sendMail.js";

const app = express();
app.use(express.json());

// Test route
app.get("/",(req, res) => {
    res.send("Mailtrap Test Server is running 🚀");
});

// Email send route
app.post("/send", async (req, res) => {
  const { to, subject, message } = req.body;
  
  if (!to || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const result = await sendMail(to, subject, message);

  if(result.success) {
    res.json({message: "Email sent successfully!", id: result.id });
  }else {
    res.status(500).json({ error: "Failed to send email", details: result.error });
  }
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
