const express = require('express');
const router = express.Router();
const Influencer = require('../Model/Influencer');



router.get('/', async (req, res) => {
    try {
        const influencers = await Influencer.find({});
        res.send(influencers);
        console.log("heloo",influencers)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const influencer = await Influencer.findById(_id);
        if (!influencer) {
            return res.status(404).send({ error: 'Influencer not found' });
        }
        res.send(influencer);
        console.log("heloo",influencer)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


module.exports = router;

