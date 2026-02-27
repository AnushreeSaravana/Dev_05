const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  phone: { type: String, unique: true, sparse: true },
  password: String,
  anonymousName: String,
  avatar: String,
  isAnonymous: Boolean,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);