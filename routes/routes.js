const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get('/', async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find({});
        // Send the users as a response
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});


router.post('/api/v1/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        if (!name || !email || !password) {
            return res.status(400).json({ error: ' all details are  required.' });
        }
        await newUser.save();
        res.status(201).json({ message: 'Success ! ...', newUser });
    } catch (error) {
        if (error.code === 11000 && error.keyValue.email) {
            const duplicateEmail = error.keyValue.email;
            return res.status(400).json({ error: `Email is already in use.` });
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router
