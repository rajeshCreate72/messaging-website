const express = require('express');
const router = express.Router();
const users = require('./UsersSchema');
const bcrypt = require('bcrypt');

// Register Form
router.post('/', async(req, res) => {
    const {email, userId, password} = req.body

    try{
        const checkEmail = await users.findOne({email: email})
        const checkUserId = await users.findOne({userId: userId})

        if(checkEmail) {
            res.status(400).json("Email already Exists")
        }
        else if(checkUserId) {
            res.status(400).json("UserId already Exists");
        }
        else {
            const hashPasswd = await bcrypt.hash(password, 10)
            const data = {
                email: email,
                userId: userId,
                password: hashPasswd,
            }
            await users.create(data);
            res.status(200).json('Registration Successful')
        }
    }
    catch(error) {
        console.error('Error Registering: ', error)
        res.status(500).json('Error registring User: ')
    }

})

router.get('/', async(req, res) => {
    const { userId } = req.query;
    try {
        const User = await users.findOne({ userId : userId })
        res.json(User)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router