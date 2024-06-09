const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    contacts: {
        type: Array,
        required: true,
    }
})


const contacts = mongoose.model('contacts', contactsSchema)

module.exports = contacts