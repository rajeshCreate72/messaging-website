const express = require("express");
const chatsDb = require("./ChatsSchema");
const contactsDb = require("../ContactsCollection/ContactsSchema");
const router = express.Router();

async function addContactToContact(userId, contactId, res) {
  try {
    const addContactTo = await contactsDb.findOne({ userId: contactId });
    if (addContactTo) {
      if (addContactTo.contacts.indexOf(userId) !== -1) {
        return "contact already exisit";
      } else {
        addContactTo.contacts.push(userId);
        await addContactTo.save();
        return "Contact added to DB";
      }
    } else {
      const newUser = new contactsDb({
        userId: contactId,
        contacts: [userId],
      });
      await newUser.save();
      return "New Contact added to DB";
    }
  } catch (error) {
    console.log(error);
    throw new Error("Network error");
  }
}

router.post("/", async (req, res) => {
  const { userId, contactId, message } = req.body;
  try {
    const chat = await chatsDb.findOne({
      $or: [
        { user1: userId, user2: contactId },
        { user1: contactId, user2: userId },
      ],
    });
    if (chat) {
      chat.messages.push(message);
      await chat.save();
      addContactToContact(userId, contactId, res);
      res.status(200).json("Messages push success");
    } else {
      const newChat = new chatsDb({
        user1: userId,
        user2: contactId,
        messages: [message],
      });
      await newChat.save();
      addContactToContact(userId, contactId, res);
      res.status(200).json("New Chat created");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Failed to save the message");
  }
});

router.get("/", async (req, res) => {
  const { userId, contactId } = req.query;

  try {
    const checkUser = await chatsDb.findOne({
      $or: [
        { user1: userId, user2: contactId },
        { user1: contactId, user2: userId },
      ],
    });
    if (checkUser) {
      const messages = checkUser.messages;
      // console.log("Messages found:", messages);
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
