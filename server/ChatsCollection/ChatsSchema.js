const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  user: { type: String, required: true },
  msg: { type: String, required: true },
  time: { type: String, required: true },
});

const chatsSchema = new mongoose.Schema({
  user1: { type: String, required: true },
  user2: { type: String, required: true },
  messages: [MessageSchema],
});

const chats = mongoose.model("chats", chatsSchema);

module.exports = chats;
