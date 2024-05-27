const mongoose =require('mongoose')
const Blog =mongoose.Schema({ 
    date:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:false
    },
})

const User =mongoose.model('blog',Blog) 
module.exports= User