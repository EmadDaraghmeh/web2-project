const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../Model/User");

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { platform, link } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error("Invalid ID format:", id);
    return res.status(400).send({ error: "Invalid ID format" });
  }

  try {
    console.log(`Finding user with ID: ${id}`);
    const user = await User.findById(id);
    if (!user) {
      console.log(`User not found for ID: ${id}`);
      return res.status(404).send("User not found");
    }

    console.log("User found:", user);

    if (typeof user.socialMedia === 'string') {
      user.socialMedia = {};
    }

    if (platform && link) {
      user.socialMedia[platform] = link;
    }

    await user.save();
    console.log("Social media link updated successfully");

    res.status(200).send("Social media link updated successfully");
  } catch (error) {
    console.error("An error occurred while updating the social media link:", error.message);
    res.status(500).send("An error occurred while updating the social media link");
  }
});

module.exports = router;
