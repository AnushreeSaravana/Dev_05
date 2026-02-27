const express = require("express");
const router = express.Router();
const Story = require("../models/Story");

/**
 * CREATE STORY (Publish)
 */
router.post("/publish", async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.json({ success: true, storyId: story._id });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to publish story" });
  }
});

/**
 * GET ALL STORIES (Feed)
 */
router.get("/feed", async (req, res) => {
  const stories = await Story.find({ visibility: "public" })
    .sort({ createdAt: -1 });
  res.json(stories);
});

module.exports = router;