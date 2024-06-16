const express = require('express')
const connectDatabase = require('./DatabaseConnection.js')
const cors = require('cors')
// Connection to database
connectDatabase()

// Routes
const loginConnection = require('./UsersCollection/UsersLogin.js')
const registerConnection = require('./UsersCollection/UsersRegister.js')
const contactsConnection = require('./ContactsCollection/Contacts.js')
const chatsConnection = require('./ChatsCollection/Chats.js')
const usersConnection = require('./UsersCollection/UsersRegister.js')

const app = express()

app.use(express.json())
app.use(cors())

// Connection to routes
app.use('/api/login', loginConnection)
app.use('/api/register', registerConnection)
app.use('/api/contacts', contactsConnection)
app.use('/api/chats', chatsConnection)
app.use('/api/users', usersConnection)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT} `)
})