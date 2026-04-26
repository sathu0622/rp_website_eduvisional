import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { sendContactEmail } from "./mailService.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 8000;
const startedAt = Date.now();
const allowedOrigins = (process.env.CLIENT_ORIGINS || process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const allowAllVercelPreviewOrigins = process.env.ALLOW_VERCEL_PREVIEW_ORIGINS !== "false";

function isAllowedOrigin(origin) {
  if (allowedOrigins.includes(origin)) {
    return true;
  }

  if (allowAllVercelPreviewOrigins && /^https:\/\/[a-zA-Z0-9-]+\.vercel\.app$/.test(origin)) {
    return true;
  }

  return false;
}

const corsOptions = {
  origin(origin, callback) {
    // Allow requests with no origin (server-to-server, curl, health checks).
    if (!origin) {
      return callback(null, true);
    }

    if (isAllowedOrigin(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

function validateContactPayload(payload) {
  const name = payload?.name?.trim();
  const email = payload?.email?.trim();
  const subject = payload?.subject?.trim() || "";
  const message = payload?.message?.trim();

  if (!name || !email || !message) {
    return { isValid: false, error: "Name, email, and message are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Please provide a valid email address." };
  }

  return {
    isValid: true,
    value: { name, email, subject, message },
  };
}

function sendHealthStatus(_req, res) {
  res.status(200).json({
    ok: true,
    service: "contact-email-service",
    uptimeSeconds: Math.floor((Date.now() - startedAt) / 1000),
    timestamp: new Date().toISOString(),
  });
}

app.get("/health", sendHealthStatus);
app.get("/api/health", sendHealthStatus);

app.post("/api/contact", async (req, res) => {
  const result = validateContactPayload(req.body);

  if (!result.isValid) {
    return res.status(400).json({ ok: false, message: result.error });
  }

  try {
    await sendContactEmail(result.value);
    return res.status(200).json({ ok: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return res.status(500).json({
      ok: false,
      message: "Unable to send message right now. Please try again later.",
    });
  }
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Contact email service running on http://localhost:${port}`);
  });
}

export default app;
