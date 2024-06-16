const express = require('express')
const contacts = require('./ContactsSchema')
const router = express.Router()

router.post('/', (req, res) => {
    const { userId, contacts } = req.body
})

module.exports = router