const express = require("express");
const router = express.Router();
const Brand = require("../Model/User");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);

    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    return res.status(200).json({
      userName: brand.userName,
      description: brand.description,
      socialMedia: {
        instagram: brand.instagram,
        facebook: brand.facebook,
        tiktok: brand.tiktok,
        youtube: brand.youtube,
        snapchat: brand.snapchat,
        x: brand.x
      },
      cover: brand.cover,
      picture: brand.picture,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
