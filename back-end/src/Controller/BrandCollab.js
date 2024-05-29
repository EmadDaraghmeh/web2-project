const express = require("express");
const mongoose = require("mongoose");
const brandC = require("../Model/Offers");
const router = express.Router();
const { ObjectId } = mongoose.Types;

router.post("/", async (req, res) => {
  try {
    const { terms, platform, date, startDate, endDate, price, influencerId, brandId } = req.body;

    if (!terms || !platform || !date || !startDate || !endDate || !price || !influencerId || !brandId) {
      return res.status(400).send({
        message: 'Please provide all required fields: terms, platform, date, startDate, endDate, price, influencerId, brandId'
      });
    }

    const newCollab = {
      terms,
      platform,
      date,
      startDate,
      endDate,
      price,
      influencerId: new ObjectId(influencerId),
      brandId: new ObjectId(brandId),
      state: req.body.state || 'pending',
    };

    const collabs = await brandC.create(newCollab);
    return res.status(201).send(collabs);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
