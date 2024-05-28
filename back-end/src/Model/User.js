const mongoose = require("mongoose");

const { Schema } = mongoose;


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

   
  }, industry:{
    type: String,
    required: true,
  }
  ,countryCode:{
    type: String,
    required: true,
  },
  price:{
    type: String,
    required: true,
  },
  phoneNumber: {
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
    minlength: 8,
   
  },
  userRole: { 
    type: String,
    enum: ["brand", "influencer"],
     required: true ,
    default:"brand"
  },socialMedia: {
    type: String,
    required:false,
    enum: ['instagram', 'facebook', 'tiktok', 'youtube', 'snapChat', 'X']},
    instagram: { type: String, required: false },
    facebook: { type: String, required: false },
    tiktok: { type: String, required: false },
    youtube: { type: String, required: false },
    snapchat: { type: String, required: false },
    x: { type: String, required: false },
    picture:{
      type: String,
      required:false
    }, cover:{
      type: String,
      required:false
    },description:{
      type: String,
      required:false
    }
});

const User = mongoose.model("users", CreateAcc);
module.exports = User;
