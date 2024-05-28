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
    required:true,
    enum: ['instagram', 'facebook', 'tiktok', 'youtube', 'snapChat', 'X']},
    picture:{
      type: String,
      required:false
    }, cover:{
      type: String,
      required:false
    }
});

const User = mongoose.model("users", CreateAcc);
module.exports = User;
