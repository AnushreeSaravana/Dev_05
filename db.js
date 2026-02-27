const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/emotion_platform");

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected 🌱");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});