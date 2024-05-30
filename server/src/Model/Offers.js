const mongoose = require("mongoose");
const { Schema } = mongoose;

const offers = new Schema({
	date: {
		type: String,
		required: true,
	},
	platform: {
		type: String,
		required: true,
	},
	terms: {
		type: String,
		required: true,
	},
	startDate: {
		type: String,
		required: true,
	},
	endDate: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	influencerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "influencers",
		required: true,
	},
	brandId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "brands",
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	sentBy: {
		type: mongoose.Schema.Types.ObjectId,
	},
});

const User = mongoose.model("offers", offers);
module.exports = User;
