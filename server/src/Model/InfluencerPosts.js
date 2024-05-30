const mongoose = require('mongoose');
const { Schema } = mongoose;

const influencer_post = new Schema({
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
    influencerId:{
        type:mongoose.Schema.Types.ObjectId, ref: 'influencers',
        required:true
    },
});

const User = mongoose.model('influncer-posts', influencer_post);
module.exports = User;
