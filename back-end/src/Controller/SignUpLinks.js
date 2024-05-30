const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../Model/User");

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { platform, link } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error("invalid id format:", id);
    return res.status(400).send({ error: "invalid id format" });
  }

  try {
    console.log(`finding user with ID: ${id}`);
    const user = await User.findById(id);
    if (!user) {
      console.log(`user not found for id: ${id}`);
      return res.status(404).send("user not found");
    }

    console.log("user found:", user);

    if (typeof user.socialMedia === 'string') {
      user.socialMedia = {};
    }

    if (platform && link) {
      user.socialMedia[platform] = link;
    }

    await user.save();
    console.log("social media link updated successfully");

    res.status(200).send("social media link updated successfully");
  } catch (error) {
    console.error("there is an error occurred while updating the social media link", error.message);
    res.status(500).send("there is an error occurred while updating the social media link");
  }
});

module.exports = router;
