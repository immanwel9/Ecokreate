import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendContactEmail } from "./src/utils/email.js";

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Email endpoint
app.post("/api/send-contact-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Send email
    const result = await sendContactEmail(name, email, message);

    res.json({ success: true, messageId: result.messageId });
  } catch (error) {
    console.error("Email error details:", error);
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error(`Error message: ${errorMsg}`);
    res.status(500).json({
      success: false,
      error: errorMsg,
    });
  }
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});
