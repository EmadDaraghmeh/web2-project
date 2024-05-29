const mongoose = require('mongoose');


const socialMediaSchema = new mongoose.Schema({
    numberOfFollowers: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: "",
    },
  });

const influencerSchema = mongoose.Schema({ 
   
    email: {
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
        required: true,
        
    },
    password: {
        type: String,
        required: true,
       
    },
    cover: {
        type: String,
        required: false,
       
    },
    profilePhoto: {
        type: String,
        required: false,
       
    },
    numberOfFollowers: {
        type: String,
        required: true,
       
    },
    logo: {
        type: String,
        required: false,
        
    },
    type: {
        type: String,
        required: true,
       
    },
    category: {
        type: String,
        required: true,
        
    },
    platform:{
        instagram: socialMediaSchema,
        facebook: socialMediaSchema,
        tiktok: socialMediaSchema,
        youtube: socialMediaSchema,
        snapChat: socialMediaSchema,
        X: socialMediaSchema,
        type: {
          type: String,
          required: true,
          enum: ['instagram', 'facebook', 'tiktok', 'youtube', 'snapChat', 'X'],
        },
      },
    postIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brand-posts',
        required: true
    }],
    offerIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'offers',
        required: true
    }],
    orderby: {
        type: String,
        required: false,
        
    },
    price: {
        type: Number,
        required: false,
      
    },
    firstName: {
        type: String,
        required: false,
        
    },
    lastName: {
        type: String,
        required: false,
       
    },
});

const Influencer = mongoose.model('Influencer', influencerSchema);
module.exports = Influencer;
