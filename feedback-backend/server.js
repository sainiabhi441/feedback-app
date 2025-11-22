const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ⭐ Correct CORS Setup for GitHub Pages + Localhost
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://sainiabhi441.github.io",
    "https://sainiabhi441.github.io/feedback-frontend"
  ],
  methods: ["GET", "POST"],
}));

// Middleware
app.use(express.json());

// ✅ Routes import (Feedback routes)
const feedbackRoutes = require("./routes/feedbackRoutes");

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/feedbackDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Redirect root URL to /api/feedback
app.get("/", (req, res) => {
  res.redirect("/api/feedback");
});

// ✅ Use feedback routes
app.use("/api/feedback", feedbackRoutes);

// ✅ Start server (for Render)
const PORT = process.env.PORT || 8000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
