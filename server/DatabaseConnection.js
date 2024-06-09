const mongoose = require('mongoose');

const connectDatabase = async() => {
    try {
        mongoose.connect('mongodb://localhost:27017/chatWebsite');
        console.log('Connected to database')
    } catch(error) {
        console.log("Error Connecting Database", error);
    }
}

module.exports = connectDatabase;