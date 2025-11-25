const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ⭐ Updated CORS for GitHub Pages
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://sainiabhi441.github.io/feedback-app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Middleware
app.use(express.json());

const feedbackRoutes = require("./routes/feedbackRoutes");

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/feedbackDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Default redirect
app.get("/", (req, res) => {
  res.redirect("/api/feedback");
});

// Routes
app.use("/api/feedback", feedbackRoutes);

// Server Start
const PORT = process.env.PORT || 8000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
