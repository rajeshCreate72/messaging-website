const express = require("express");
const contactDb = require("./ContactsSchema");
const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, contact } = req.body;

  try {
    let checkUser = await contactDb.findOne({ userId: userId });

    if (checkUser) {
      if (checkUser.contacts.indexOf(contact) !== -1) {
        res.status(200).json("contact already exisit");
      } else {
        checkUser.contacts.push(contact);
        await checkUser.save();
        res.status(200).json("Contact added to DB");
      }
    } else {
      const newUser = new contactDb({
        userId: userId,
        contacts: [contact],
      });
      await newUser.save();
      res.status(200).json("New Contact added to DB");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const { userId } = req.query;

  try {
    const checkUser = await contactDb.findOne({ userId: userId });

    if (!checkUser) {
      res.status(404).json("No contacts added");
    } else {
      res.status(200).json(checkUser.contacts);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
