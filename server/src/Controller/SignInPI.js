// const express = require('express');
// const path = require ('path');
// const bcrypt = require ('bcrypt');// لاشفر كلمات السر 
// const collection = require ('../Model/User.js');
// const router =express.Router()


// router.post("/Signin" ,async (req , res) => {
//     try {
//         const check = await collection.findOne({name : req.body.userName }); 
//         if(!check){-
//             res.send("user name cannot found"); 
//         }
//         const isPasswordMatch = await bcrypt.compare(req.body.password , check.password ); 
//         if (isPasswordMatch){
//             res.render("home");
//         }else {
//             req.send("Wrong password");
//         }
//     }catch{ 
//           res.status(500).send("Wrong Details "); 
//     }
// });

    
//     module.exports= router;


// const express = require('express');
// const bcrypt = require('bcrypt');
// const Brand = require('../Model/Brand');
// const Influencer = require('../Model/Influencer');

// const  signIn=async(email,password)=>{
//     const hashedPassword = await bcrypt.hash(password, 10);
//     let user;
//     user=await Brand.findOne({email})
//     if(!user){
//         user=await Influencer.findOne({email})
//     }else if(!user){
//         throw new Error("User not found")
//     }
//     const isPasswordMatch = await bcrypt.compare(hashedPassword , user.password );
//     if(!isPasswordMatch){
//         throw new Error("Invaild password")
//     }
//     return user
// }
// module.exports={signIn}
// router.post("/", async (req, res) => {
    
//     try {
//         const {Id}=req.params
//         const brandUser = await Brand.findOneById({eMAIL});
        
//         if (!brandUser) {
//             const InfluencerUser = await Influencer.findOneById({ Id });
//             if(!InfluencerUser){
//                 return res.status(404).send("Username not found");
//             }else {
//                 const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
//                 if (isPasswordMatch) {

//                     return res.render("home");
//                 } else {
//                     return res.status(401).send("Wrong password");
//                 }
//             }
//         }else{
//             const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
//             if (isPasswordMatch) {
//                 return res.render("home");
//             } else {
//                 return res.status(401).send("Wrong password");
//             }
//         } 
//     } catch {
//         return res.status(500).send("An error occurred while processing your request");
//     }
// });

// module.exports = router;

// const express = require('express');
// const bcrypt = require('bcrypt');
// const User =require("../Model/User")

// const  signIn=async(email,password)=>{
//     const hashedPassword = await bcrypt.hash(password, 10);
//     let user;
//     user=await Brand.findOne({email})
//     if(!user){
//         user=await Influencer.findOne({email})
//     }
//     const isPasswordMatch = await bcrypt.compare(hashedPassword , user.password );
//     if(!isPasswordMatch){
//         throw new Error("Invaild password")
//     }
//     return user
// }
// module.exports={signIn}


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