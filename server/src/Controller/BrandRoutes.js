// import express from'express'
const express = require("express");
const brand = require("../Model/Brand");
const router = express.Router();

//Route for Save a new Book
router.post("/", async (req, res) => {
	try {
		if (
			!req.body.brandName ||
			!req.body.email ||
			!req.body.password ||
			!req.body.phoneNumber ||
			!req.body.country ||
			!req.body.city ||
			!req.body.category ||
			!req.body.numberOfFollowers ||
			!req.body.cover
		) {
			return res.status(400).send({
				message: "send all required fileds: title, author, puvlishYear",
			});
		}
		const newBrand = {
			brandName: req.body.brandName,
			email: req.body.email,
			password: req.body.password,
			phoneNumber: req.body.phoneNumber,
			country: req.body.country,
			city: req.body.city,
			category: req.body.category,
			numberOfFollowers: req.body.numberOfFollowers,
			cover: req.body.cover,
			profilePhoto: req.body.profilePhoto,
			postsIds: req.body.postsIds,
			offersIds: req.body.offersIds,
		};
		const brands = await brand.create(newBrand);
		return res.status(201).send(brands);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

//Route for Get All Bkoos from database
router.get("/", async (req, res) => {
	try {
		const brands = await brand.find({});
		const newBrand = {
			count: brands.length,
			data: brands,
		};
		return res.status(200).json(newBrand);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

// //Route for Get one book from database by id
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const brandFound = await brand.findById(id);
		return res.status(200).json(brandFound);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

router.delete("/:id/delete-account", async (req, res) => {
	const { id } = req.params;
	try {
		const brandDoc = await brand.findById(id);
		if (brandDoc) {
			await brand.findByIdAndDelete(id);
			res.status(200).json({
				message: `Account ${id} deleted!`,
			});
		} else {
			res.status(404).json({
				message: "Account does not exist",
			});
		}
	} catch (error) {
		console.log(
			`Error occurred while trying to delete account with id of ${id}`,
			error
		);
	}
});

module.exports = router;
