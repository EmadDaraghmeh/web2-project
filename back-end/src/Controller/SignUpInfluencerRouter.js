const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../Model/User'); 

const routerSignup = express.Router();

 
routerSignup.post('/SignUpInfluencer', async (req, res) => {
    try {
        const {
            email, firstName, lastName, password,
            phoneNumber, country, city, zipCode,
        } = req.body;

       
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists!");
        }

    
        const hashedPassword = await bcrypt.hash(password, 10);

     
        const newUser = new User({
            email,
            firstName,
            lastName,
            password: hashedPassword,
            phoneNumber,
            country,
            city,
            zipCode
        });
        await newUser.save();

        console.log("New user registered:", newUser);
        res.status(201).send("Registered Successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send({ Message: err.message });
    }
});


 module.exports=routerSignup;