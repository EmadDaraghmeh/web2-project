const express = require('express');
const ContactUss = require('../Model/ContactUsBack'); 
const nodemailer=require('nodemailer');

const routerContactUs = express.Router();
 
const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user:'influenblend7@gmail.com',
        pass: 'gxhl dfsr pcrh nlzb',
    }
});


routerContactUs.post('/', async (req, res) => {
    try {
        const {
           E_mail,
            F_name,
             L_name,
             message
        } = req.body;

        const newMessage = new ContactUss({
            email  : E_mail,
            firstName:F_name,
            lastName: L_name,
           message
        });
        await newMessage.save();


        let mailOptions = {
            from: E_mail,
            to: 'influenblend7@gmail.com',
            text: `You have received a new message from ${F_name} ${L_name}(${E_mail}):\nMessage: ${message}`,
            html: `<b>You have received a new message from ${F_name} ${L_name}(${E_mail}):</b><br><b>Message:</b> ${message}`
        };
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
            res.status(201).json({ message: "Message received and email sent successfully" });
        } catch (error) {
            console.error('Full error stack:', error);
            res.status(500).json({ message: "Email could not be sent. Error: " + error.toString() });
        }

        console.log("Contacted us Successfully :", newMessage);
        res.status(201).send("The message has sent");
    } catch (err) {
        console.log(err);
        res.status(500).send({ Message: err.message });
    }
});

 module.exports=routerContactUs;