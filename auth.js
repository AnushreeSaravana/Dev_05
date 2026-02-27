const express = require("express");
const router = express.Router();
const User = require("../models/User");

// AI-style anonymous name generator
function generateAnon() {
  const words = ["Quiet", "Gentle", "Hidden", "Calm", "Soft"];
  return (
    words[Math.floor(Math.random() * words.length)] +
    "Soul" +
    Math.floor(Math.random() * 1000)
  );
}

// Guest / Anonymous entry
router.post("/guest", async (req, res) => {
  const anonName = generateAnon();

  const user = new User({
    anonymousName: anonName,
    isAnonymous: true
  });

  await user.save();
  res.json({ success: true, anonymousName: anonName });
});

module.exports = router;