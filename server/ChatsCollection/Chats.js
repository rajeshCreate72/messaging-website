const express = require("express");
const chatsDb = require("./ChatsSchema");
const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, contactId, messages } = req.body;

  try {
    let chatDocument;
    const checkUser = await chatsDb.findOne({
      $or: [
        { user1: userId, user2: contactId },
        { user1: contactId, user2: userId },
      ],
    });

    if (checkUser) {
      chatDocument = checkUser;
    } else {
      let newMessage;
      if (messages.length > 0) {
        chatDocument = new chatsDb({
          user1: userId,
          user2: contactId,
          messages: [],
        });
        newMessage = {
          user: messages[0].user,
          msg: messages[0].msg,
          time: messages[0].time,
        };
      } else {
        chatDocument = new chatsDb({
          user1: userId,
          user2: contactId,
          messages: [],
        });
      }
      chatDocument.messages.push(newMessage);
      await chatDocument.save();
      res.status(200).json("successfully submitted");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Failed to save the message");
  }
});

router.get("/", async (req, res) => {
  const { userId, contactId } = req.query;
  console.log(req.query);

  try {
    const checkUser = await chatsDb.findOne({
      $or: [
        { user1: userId, user2: contactId },
        { user1: contactId, user2: userId },
      ],
    });
    if (checkUser) {
      const messages = checkUser.messages;
      console.log("Messages found:", messages);
      res.status(200).json(messages);
    } else {
      console.log("Chat not found for users:", userId, "and", contactId);
      res.status(404).json("No user found");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json("No Messages");
    res.status(500).json("Network Error");
  }
});

module.exports = router;
