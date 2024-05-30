// import express from'express'
const express = require("express");
const bcrypt = require("bcrypt");
const users = require("../Model/User");
const router = express.Router();

// endpoint to delete user
router.delete("/:id/delete-account", async (req, res) => {
	const { id } = req.params;
	try {
		const userDoc = await users.findById(id);
		if (userDoc) {
			await users.findByIdAndDelete(id);
			res.status(200).json({
				message: `user Account ${id} deleted !`,
			});
		} else {
			res.status(404).json({
				message: "user Account does not exist",
			});
		}
	} catch (error) {
		console.log(
			`Error occurred while trying to delete user account with id of ${id}`,
			error
		);
	}
});

// router.post("/signIn", async (req, res) => {
// 	const body = req.body;
// 	console.log(body);
// 	const email = body.email;
// 	const password = body.password;
// 	// const hashedPassword = await bcrypt.hash(password, 10);
// 	try {
// 		const userDoc = await users.findOne({
// 			email: email,
// 			password: password,
// 		});
// 		if (userDoc) {
// 			res.status(200).json(userDoc);
// 		} else {
// 			console.log(
// 				`User email ${email} & password = ${password} are not working`
// 			);
// 			res.status(404).json({
// 				message: "user Account does not exist",
// 			});
// 		}
// 	} catch (error) {
// 		console.log(
// 			`Error occurred while trying to log in user account with id of ${id}`,
// 			error
// 		);
// 	}
// });

router.post("/Signin", async (req, res) => {
	try {
		const user = await users.findOne({ email: req.body.email });
		if (!user) {
			return res.status(401).send("User name cannot be found");
		}

		const isPasswordMatch = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isPasswordMatch) {
			return res.status(404).send("Wrong password");
		}

		req.user = user;
		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		res.status(500).send("Internal Server Error");
	}
});

module.exports = router;
