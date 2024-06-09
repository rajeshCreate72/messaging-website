const express = require('express')
const connectDatabase = require('./DatabaseConnection.js')
const cors = require('cors')
// Connection to database
connectDatabase()
// Routes
const loginConnection = require('./routes/UsersLogin.js')
const registerConnection = require('./routes/UsersRegister.js')
const contactsConnection = require('./routes/Contacts.js')
const chatsConnection = require('./routes/Chats.js')

const app = express()

app.use(express.json())
app.use(cors())

// Connection to routes
app.use('/api/login', loginConnection)
app.use('/api/register', registerConnection)
app.use('/api/contacts', contactsConnection)
app.use('/api/chats', chatsConnection)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})