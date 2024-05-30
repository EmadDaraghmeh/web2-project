const mongoose = require('mongoose');
const { Schema } = mongoose;

const userPost = new Schema({
    posts:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId, ref: 'usres',
        required:true
    },
});

const Post = mongoose.model('userpost', userPost);
module.exports = Post;
