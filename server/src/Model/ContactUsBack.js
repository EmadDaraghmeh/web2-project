const mongoose = require('mongoose');

const { Schema } = mongoose;

const validator=require('validator')

const Contactus = new Schema({
  
    firstName: {
        type: String,
        required: true,
        trim:true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error(' first name is required')
            }
        }
        

    },
    lastName: {
        type: String,
        required: true,
        trim:true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error('last  name is required')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim:true,
        isLowercase:true,

        validate(value){
       if(!validator.isEmail(value)){
        throw new Error('Email is invalid')
       }
        }
    },
    message:{
        type: String,
        required: true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error('message is required')
            }
        }
    }
  
});

const ContactUss= mongoose.model('users', Contactus);
module.exports = ContactUss;
