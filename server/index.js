const express = req('express')
const collection = req('./database')
const cors = req('cors')
const bcrypt = req('bcrypt')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.listen(3001, () => {
    console.log("Server is running")
})


// Register Form
app.post('/register', async(req, res) => {
    const{email, userId, name, password} = req.body

    try{
        const checkEmail = await collection.findOne({email: email})
        const checkUserId = await collection.findOne({userId: userId})

        if(checkEmail || checkUserId) {
            res.status(400).json("Email or userId already Existed")
        }
        else {
            const hashPasswd = await bcrypt.hash(password, 10)
            const data = {
                email: email,
                userId: userId,
                name: name,
                password: password,
            }
            await collection.insertOne(data)
            res.status(200).json('Registration Successful')
        }
    }
    catch(error) {
        console.error(error)
        res.status(500).json('Error registring User')
    }

})

// Login Form
app.post('/login', async(req, res) => {
    const{email, password} = req.body

    try{
        const checkEmail = await collection.findOne({email: email})
        
        if (!checkEmail) {
            return res.status(404).json('User not found');
        }

        const checkPasswd = await bcrypt.password(password, checkEmail.password)

        if(checkPasswd) {
            res.status(200).json('Logged in successfully');
        }
        else {
            res.status(401).json('Invalid password or email')
        }
    }
    catch(error) {
        console.error(error)
        res.status(500).json('Error logging in')
    }

})


