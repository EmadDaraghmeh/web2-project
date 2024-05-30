const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");


const CreateAcc = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true },

  email: {
    type: String,
    required: true,
    trim: true,
    isLowercase: true,

  },
  phoneNumber: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isMobilePhone(value)) {
        throw new Error("Phonr number is invalid");
      }
    },



  }, industry:{
    type: String,
    required: true,
  },
  price:{
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8
  },
  userRole: { 
    type: String,
    enum: ["brand", "influencer"],

    required: true
   },
   socialMediaLinks: {
    instagram: { type: String },
    facebook: { type: String },
    tiktok: { type: String },
    twitter: { type: String },
    youtube: { type: String },
    snapchat: { type: String },
    
},

});

const User = mongoose.model("users", CreateAcc);
module.exports = User;
