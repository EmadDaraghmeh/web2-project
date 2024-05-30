const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  numberOfUser: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: "",
  },
});

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

const brandSchema = mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
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
  categories: {
    Beauty: categorySchema,
    Fashion: categorySchema,
    Sports: categorySchema,
    Technology: categorySchema,
    Healthcare: categorySchema,
    Food: categorySchema,
    Entertainment: categorySchema,
    Travel: categorySchema,
    Education: categorySchema,
    type: {
      type: String,
      required: true,
      enum: [
        'Beauty',
        'Fashion',
        'Sports',
        'Technology',
        'Healthcare',
        'Food',
        'Entertainment',
        'Travel',
        'Education'
      ],
    },
  },
  socialMedia: {
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
  cover: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: false,
  },
  postIds: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand-posts",
    required: true,
  },
  offerIds: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "offers",
    required: true,
  },
});

const User = mongoose.model("brand", brandSchema);
module.exports = User;
