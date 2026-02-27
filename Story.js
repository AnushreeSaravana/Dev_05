const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  body: String,

  emotion: String,
  tags: [String],

  isAnonymous: Boolean,
  authorAnonName: String,

  visibility: {
    type: String,
    enum: ["public", "circles", "private"],
    default: "public"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Story", StorySchema);