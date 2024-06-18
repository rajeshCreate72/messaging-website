const express = require('express')
const chatsDb = require('./ChatsSchema')
const router = express.Router()

router.post('/', async(req, res) => {
    const { userId, contactId, messages} = req.body

    try {
        const checkUser = await chatsDb.findOne({ user1: userId, user2: contactId })
        const checkContact = await chatsDb.findOne({ user1: contactId, user2: userId })

        if(checkUser) {
            checkUser.messages.push(...messages)
            await checkUser.save()
            res.status(200).json('successfuly submitted')
        } else if(checkContact) {
            checkContact.messages.push(...messages)
            await checkContact.save()
            res.status(200).json('successfully submitted')
        } else {
            const createChat = new chatsDb({
                user1: userId,
                user2: contactId,
                messages: messages
            })
            await createChat.save()
            res.status(200).json('successfully submitted')
        }
    } catch(error) {
        console.log(error)
        res.status(500).json('Failed to save the message')
    }
})

router.get('/', async(req, res) => {
    const { userId, contactId } = req.query

    try {
        const checkUser = await chatsDb.findOne({ user1: userId, user2: contactId })
        const checkContact = await chatsDb.findOne({ user1: contactId, user2: userId })

        if(checkUser) {
            res.status(200).json(checkUser.messages)
            console.log(checkUser.messages)
        } else if(checkContact) {
            res.status(200).json(checkContact.messages)
            console.log(checkContact.messages)
        }
    } catch(error) {
        console.log(error)
        res.status(404).json('No Messages')
        res.status(500).json('Network Error')
    }
})


module.exports = router