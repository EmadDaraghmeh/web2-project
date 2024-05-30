const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Model/User');

const routerSignup = express.Router();

const JWT_SECRET = 'your_secret_key'; 

routerSignup.post('/', async (req, res) => {
    try {
        const {
            email,
            userName,
            password,
            countryCode,
            phoneNumber,
            country,
            city,
            Category,
        } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(404).send("User exists!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            userName: userName,
            email: email,
            password: hashedPassword,
            phoneNumber: phoneNumber,
            country: country,
            city: city,
            countryCode: countryCode,
            Category: Category,
        });
        await newUser.save();

        // Generate JWT
        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ message: "Successfully registered", token });
        console.log("New user registered:", newUser);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
});

module.exports = routerSignup;