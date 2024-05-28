const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../Model/User'); 

const routerSignup = express.Router();


 
routerSignup.post('/', async (req, res) => {
    try {
        const {
            email, userName, password,userRole,
            countryCode,industry,price,picture,cover,
            phoneNumber, country, city, zipCode,
        } = req.body; 
        console.log(req.body,10)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists!");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({
            userName,
            email,
            price,
            phoneNumber,
            industry,
            password: hashedPassword,
            countryCode,
            userRole,
            country,
            city,
            zipCode,
            picture,
            cover
           
        });
        console.log(newUser)
        await newUser.save();
        console.log("New user registered:", newUser);
        res.status(201).send("Registered Successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send({ Message: err.message });
    }
});

module.exports=routerSignup;