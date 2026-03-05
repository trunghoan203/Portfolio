import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";

import contactRoutes from "./routes/contact.routes";
import analyticsRoutes from "./routes/analytics.routes";

const app = express();
const PORT = process.env.PORT || 4000;

// === 1. Security & Performance Middleware ===
app.use(helmet()); // Bảo vệ header
app.use(compression()); // Nén response
app.use(cors()); // Cấu hình CORS
app.use(express.json());
app.use(morgan("dev"));

// Rate Limiting: Giới hạn 100 request/15 phút mỗi IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// === 2. Routes ===
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", uptime: process.uptime() });
});

// Gom nhóm API
app.use("/contact", contactRoutes);
app.use("/analytics", analyticsRoutes);

// === 3. Start Server ===
app.listen(PORT, () => {
  console.log(`🚀 Backend optimized & running on port ${PORT}`);
});
