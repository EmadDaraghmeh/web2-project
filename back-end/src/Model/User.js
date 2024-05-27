
const mongoose = require('mongoose');

const { Schema } = mongoose;

const validator=require('validator')

const CreateAcc = new Schema({
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
    phoneNumber: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error('Phonr number is invalid')
            }
        }

    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim:true,
        minlength:8,
        validate(value){
            if(!validator.isStrongPassword(value)){
              throw new Error('Password is not Strong')
            }

        }
    },
});

const User = mongoose.model('users', CreateAcc);
module.exports = User;
