const url = 'mongodb+srv://chatWebsite:websiteL1@appcluster.g9lvaj1.mongodb.net/chatWebsite?retryWrites=true&w=majority&appName=appCluster'
//mongodb+srv://chatWebsite:<password>@appcluster.g9lvaj1.mongodb.net/?retryWrites=true&w=majority&appName=appCluster
const mongoose = require('mongoose');

const connectDatabase = async() => {
    try {
        mongoose.connect(url);
        console.log('Connected to database')
    } catch(error) {
        console.log("Error Connecting Database", error);
    }
}

module.exports = connectDatabase;