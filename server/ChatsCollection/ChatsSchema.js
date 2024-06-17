const mongoose = require('mongoose')

const chatsSchema = new mongoose.Schema({
    user1: {
        type: String,
        required: true,
    },
    user2: {
        type: String, 
        required: true,
    },
    messages: {
        type: [Object],
        required: true,
    }
});

const chats = mongoose.model('chats', chatsSchema);

module.exports = chats;