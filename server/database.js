const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/users')
.then(() => {
    console.log("Database connected")
})
.catch((err) => {
    console.log("Database Not Connected")
})


const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    userId:{
        type:String,
        required: true,
    },
    
})

const collection = mongoose.model('collection', newSchema)

module.exports = collection

