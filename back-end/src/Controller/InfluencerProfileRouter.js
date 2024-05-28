const express = require('express');

const influencerUser= require('../Model/User'); 

const routerInfluencerPage = express.Router();



routerInfluencerPage.get('/:id', async (req, res) => {
    try {
       
        const influencerProfiles = await influencerUser.findById(req.params.id);
        res.status(200).json(influencerProfiles); 
        console.log("Fetched data successfully:", influencerProfiles);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).send("Cannot fetch data");
    }
});

module.exports = routerInfluencerPage;
