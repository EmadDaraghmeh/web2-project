// import mongoose from "mongoose";
const mongoose =require('mongoose')
// const {Schema}=mongoose

const brand_post =mongoose.Schema({ 
    photo:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    brandId:{
        type:mongoose.Schema.Types.ObjectId, ref: 'brands',
        required:true
    },
})

const User =mongoose.model('brand-posts',brand_post) 
module.exports= User