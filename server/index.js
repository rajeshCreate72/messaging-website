const express = require('express')
const collection = require('./database')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.listen(3000, () => {
    console.log("Server is running")
})



app.get('/', cors(), (require, result) => {

})

app.post('/register', async(require, result) => {
    const{email, password, userId} = require.body

    const data = {
        email: email,
        password: password,
        userId: userId,
    }

    try{
        const checkEmail = await collection.findOne({email: email})
        const checkUserId = await collection.findOne({userId: userId})

        if(checkEmail || checkUserId) {
            result.json("Email or userId already Existed")
        }
        else {
            result.json("Doesn't exist")
            await collection.insertMany([data])
        }
    }
    catch(error) {
        result.json("Error Checking")
    }

})


app.post('/login', async(require, result) => {
    const{email, password, userId} = require.body

    try{
        const checkEmail = await collection.findOne({email: email})
        const checkUserId = await collection.findOne({userId: userId})
        const checkPassword = await collection.findOne({password: password})

        if((checkEmail || checkUserId) && checkPassword) {
            result.json("login approved")
        }
        else {
            result.json("Doesn't exist")
        }
    }
    catch(error) {
        result.json("Error Checking")
    }

})


