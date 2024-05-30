const mongoose = require('mongoose');

const { Schema } = mongoose;


const Contactus = new Schema({
  
    firstName: {
        type: String,
        required: true,
        trim:true,
        

    },
    lastName: {
        type: String,
        required: true,
        trim:true,
       
    },
    email: {
        type: String,
        required: true,
        trim:true,
        isLowercase:true,

   
    },
    message:{
        type: String,
        required: true,
       
    }
  
});

const ContactUss= mongoose.model('contactus', Contactus);
module.exports = ContactUss;
