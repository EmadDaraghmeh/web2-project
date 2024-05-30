const express = require('express');
const bcrypt = require ('bcrypt');
const collection = require ('../Model/User.js');
const router =express.Router()

// Authentication middleware
const authenticate = async (req, res, next) => {
  try {
    const check = await collection.findOne({ name: req.body.userName });
    if (!check) {
      return res.status(401).send("User name cannot be found");
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
    if (!isPasswordMatch) {
      return res.status(401).send("Wrong password");
    }

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });


    req.user = check;
    next();
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

router.post("/Signin", authenticate, (req, res) => {
  res.render("home");
});

module.exports = router;