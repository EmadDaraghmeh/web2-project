// import express from'express'
const express = require("express");
const offers = require("../Model/Offers");
const users = require("../Model/User");

const router = express.Router();

// endpoint to get details of specific offer
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const offerFound = await offers.findById(id);
		return res.status(200).json(offerFound);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

// endpoint to get all offers assosiated with an account
router.get("/user/:userId", async (req, res) => {
	try {
		const { userId } = req.params;
		const userFound = await users.findById(userId);
		if (userFound) {
			userRole = userFound.userRole;
			console.log(userRole);
			if (userRole === "brand") {
				const allOffers = await offers.find({ brandId: userId });
				return res.status(200).json(allOffers);
			} else {
				const allOffers = await offers.find({ influencerId: userId });
				return res.status(200).json(allOffers);
			}
		}
		return res.status(404).json({
			message: `No account with id = ${userId} is found`,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

//endpoint to update an offer
router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;
		console.log(body);
		const updatedOffer = await offers.findOneAndUpdate({ _id: id }, body);
		return res.status(200).json(updatedOffer);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});
module.exports = router;
