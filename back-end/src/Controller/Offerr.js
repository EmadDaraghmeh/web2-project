const express = require('express');
const path = require ('path');
const Offerr = require ('../Model/Offers');
const router =express.Router()


router.post('/', async(req,res)=>{
    try{
        if(!req.body.date||!req.body.platform||!req.body.terms||!req.body.startDate||!req.body.endDate||!req.body.price||!req.body.influencerId||!req.body.brandId||!req.body.state){
            return res.status(400).send({
                message:'send all required fileds'
            })
        }
        const newOffer={
            date:req.body.date,
            platform:req.body.platform,
            terms: req.body.terms,
            startDate: req.body.startDate,
            endDate:req.body.endDate,
            price:req.body.price,
            influencerId:req.body.influencerId,
            brandId:req.body.brandId,
            state:req.body.state,
            profilePhoto:req.body.profilePhoto,
        }
        const offerr=await Offerr.create(newOffer)
        return res.status(201).send(offerr)
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})


router.get('/getOffer/:id' , async(req,res)=>{
    try{
        if(!req.body.Offerid){
            return res.status(400).send({
                message:'send all required fileds'
            })
        }
        let offer = await Offerr.findOne({_id:req.body.Offerid})
        if(offer!=null){ res.json({offer})
        }else{
    res.json({message : "no data found "})
    }
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})

router.put('/', async(req,res)=>{
    try{
        if(!req.body.Offerid || !req.body.state){
            return res.status(400).send({
                message:'send all required fileds'
            })
        }
        let offer = await Offerr.findOneAndUpdate({_id:req.body.Offerid } , {state: req.body.state} , {new:true})
        if(offer!=null){ res.json({offer})
        }else{
    res.json({message : "no data found "})
    }
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})




module.exports= router;
