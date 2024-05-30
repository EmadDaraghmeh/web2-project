const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../Model/User");

//password update
router.patch("/update-password/:id", async (req, res) => {
	const { id } = req.params;
	const { newPassword } = req.body;
	if (
		!newPassword ||
		typeof newPassword !== "string" ||
		newPassword.trim() === ""
	) {
		return res
			.status(400)
			.send({
				message: "New password is required and must be a valid string.",
			});
	}
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({ message: "Invalid ID format" });
	}
	try {
		const user = await User.findById(id);
		if (!user) {
			return res.status(404).send({ message: "User not found" });
		}
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(newPassword.trim(), salt);
		const updatedUser = await User.findByIdAndUpdate(
			id,
			{ $set: { password: hashedPassword } },
			{ new: true, runValidators: true }
		);
		if (!updatedUser) {
			return res.status(404).send({ message: "Failed to update password" });
		}
		res.status(200).send({ message: "Password updated successfully" });
	} catch (error) {
		console.error("Error updating password:", error);
		res
			.status(500)
			.send({
				message: "An error occurred while updating the password",
				details: error.message,
			});
	}
});

//user info update
router.patch("/update-user/:id", async (req, res) => {
	console.log("Request body:", req.body);
	const { id } = req.params;
	const updateData = req.body;
	console.log(`Received ID: ${id}`);

	if (!mongoose.Types.ObjectId.isValid(id)) {
		console.error("Invalid ID format");
		return res.status(400).send({ error: "Invalid ID format" });
	}

	try {
		console.log("Finding user with ID:", id);
		const user = await User.findById(id);
		if (!user) {
			console.log("User not found for ID:", id);
			return res.status(404).send("User not found");
		}

		console.log("User found:", user);
		const updatedUser = await User.findByIdAndUpdate(
			id,
			{ $set: updateData },
			{ new: true, runValidators: true }
		);

		if (!updatedUser) {
			console.log("Failed to update user for ID:", id);
			return res.status(500).send("Failed to update user information");
		}

		console.log("User information updated successfully", updatedUser);
		res.status(200).send("User information updated successfully");
	} catch (error) {
		console.error(
			"An error occurred while updating user information:",
			error.message
		);
		console.error(error.stack);

		if (error.code === 11000) {
			return res.status(400).send({
				message: "Duplicate key error",
				error: `Duplicate key error: ${JSON.stringify(error.keyValue)}`,
			});
		}

		res.status(500).send({
			message: "An error occurred while updating user information",
			error: error.message,
		});
	}
});

// user socail links update
router.patch("/update-social-link/:id", async (req, res) => {
	const { id } = req.params;
	const { socialMedia, url } = req.body;
	console.log(`Updating social media link for user ${id}`);
	console.log(`Received socialMedia: ${socialMedia}, URL: ${url}`);
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({ error: "Invalid ID format" });
	}
	try {
		const user = await User.findById(id);
		if (!user) {
			console.log("User not found for ID:", id);
			return res.status(404).send("User not found");
		}
		console.log("User found:", user);
		user.socialMediaLinks[socialMedia] = url;
		await user.save();
		console.log("Social media link updated successfully");
		res.status(200).send({ message: "Social media link updated successfully" });
	} catch (error) {
		console.error(
			"Error occurred while updating social media link:",
			error.message
		);
		res
			.status(500)
			.send({ message: "An error occurred while updating social media link" });
	}
});
router.get("/", async (req, res) => {
	try {
		const brands = await User.find({});
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

router.delete("/:id/delete-account", async (req, res) => {
	const { id } = req.params;
	try {
		const brandDoc = await User.findById(id);
		if (brandDoc) {
			await User.findByIdAndDelete(id);
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
