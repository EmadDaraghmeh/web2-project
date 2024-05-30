const mongoose =require('mongoose')
const blog_posts =mongoose.Schema({ 
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
        required:true
    },
})

const User =mongoose.model('blog-posts',blog_posts) 
module.exports= User