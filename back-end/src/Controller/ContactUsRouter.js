const express = require('express');
const ContactUss = require('./src/Model/ContactUsBack'); 

const routerContactUs = express.Router();
 
routerContactUs.post('/ContactUs', async (req, res) => {
    try {
        const {
            email, firstName, lastName,message
        } = req.body;

        const newMessage = new ContactUss({
            email,
            firstName,
            lastName,
           message
        });
        await newMessage.save();


        let mailOptions = {
            from: email,
            to: 'influenblend7@gmail.com',
            text: `You have received a new message from ${firstName} ${lastName}(${email}):\nMessage: ${message}`,
            html: `<b>You have received a new message from ${firstName} ${lastName}(${email}):</b><br><b>Message:</b> ${message}`
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