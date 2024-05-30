// const express = require('express');
// const path = require ('path');
// const bcrypt = require ('bcrypt');// لاشفر كلمات السر 
// const collection = require ('../Model/SignupBrand');
// const router =express.Router()
// // const app = express();
 
// // app.use(express.json());
// // app.use(express.urlencoded({extended:false}));
 
// // //use EJS as viwe engine 
// // router.set('view engine ','ejs');

// // static file 
// // router.set(express.static("public"));

// router.get ("/" ,(req , res) => {
// res.render("Signup");
// });
//  router.post("/" , async(req,res) =>{
//     const data = {
//         name : req.body.username , 
//         password : req.body.password, 
//         emailaddress : req.body.email, 
//         ConfirmPassword : req.body.ConfirmPassword,
//         Countrycode : req.body.Countrycode, 
//         Phonenumber : req.body.Phonenumber, 
//         city : req.body.city, 
//         state : req.body.state,
//         country : req.body.country, 
//         Category : req.body.Category, 
//         numberoffollowers : req.body.numberoffollowers 

//     }
//     // check if the user alreagy exists in the database 
//       const existingUser= await collection.findOne({Emailaddress:data.Emailaddress});
//       if(existingUser) {
//         res.send("User already exists , Please choose a defferent Email address ");
//       }else {
//         // لأشفر كلمة السر  
//          const saltRounds = 10 ; // عدد الجولات 
//          const hashedpassword = await bcrypt.hash(data.password , saltRounds); 
//          data.password = hashedpassword ; 

//         const userdata = await collection.insertMany(data);
//         console.log(userdata) ;
//       }
     

  

//  });
// // const port =3000;
// // app.listen(port , () => {
// //     console.log('server running on port : ${port}');
// // });

// module.exports= router;

// const express = require('express');
// const bcrypt = require('bcrypt');
// const User = require('../Model/SignupBrand'); 

// const routerSignup = express.Router();

 
// routerSignup.post('/', async (req, res) => {
//     try {
//         const {
//           Emailadaress,
//            BrandName,
//             confirmpassword,
//              password,
//              countryCode,
//             phoneNumber,
//              country,
//               city,  
//               Category, 
//               Thenumberoffollowerofcompany,
//               state,
//         } = req.body;

       
//         const existingUser = await User.findOne({  Emailadaress });
//         if (existingUser) {
//             return res.status(404).send("User exists!");
//         }

    
//         const hashedPassword = await bcrypt.hash(password, 10);

     
//         const newUser = new User({
//           BrandName:BrandName,
//           Emailadaresse:Emailadaress,
//           confirmpassword : hashedPassword,
//             password: hashedPassword,
//             phoneNumber: phoneNumber,
//             country:countryCode,
//             city: city,
//             countryCode : countryCode ,
//             Category:Category,
//             state:state,
//             Thenumberoffollowerofcompany:Thenumberoffollowerofcompany
//         });
//         await newUser.save();

//         console.log("New user registered:", newUser);
//         res.status(201).send("Successfully");
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ Message: err.message });
//     }
// });


//  module.exports=routerSignup;

// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../Model/SignupBrand');

// const routerSignup = express.Router();

// const JWT_SECRET = 'your_secret_key'; // Replace with your secret key

// routerSignup.post('/', async (req, res) => {
//     try {
//         const {
//             Emailadaress,
//             BrandName,
//             confirmpassword,
//             password,
//             countryCode,
//             phoneNumber,
//             country,
//             city,
//             Category,
//             Thenumberoffollowerofcompany,
//             state,
//         } = req.body;

//         const existingUser = await User.findOne({ Emailadaress });
//         if (existingUser) {
//             return res.status(404).send("User exists!");
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = new User({
//             BrandName: BrandName,
//             Emailadaress: Emailadaress,
//             confirmpassword: hashedPassword,
//             password: hashedPassword,
//             phoneNumber: phoneNumber,
//             country: country,
//             city: city,
//             countryCode: countryCode,
//             Category: Category,
//             state: state,
//             Thenumberoffollowerofcompany: Thenumberoffollowerofcompany
//         });
//         await newUser.save();

//         // Generate JWT
//         const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

//         console.log("New user registered:", newUser);
//         res.status(201).json({ message: "Successfully registered", token });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ message: err.message });
//     }
// });

// module.exports = routerSignup;


const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Model/User');

const routerSignup = express.Router();

const JWT_SECRET = 'your_secret_key'; 

routerSignup.post('/', async (req, res) => {
    try {
        const {
            email,
            userName,
            password,
            countryCode,
            phoneNumber,
            country,
            city,
            Category,
        } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(404).send("User exists!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            userName: userName,
            email: email,
            password: hashedPassword,
            phoneNumber: phoneNumber,
            country: country,
            city: city,
            countryCode: countryCode,
            Category: Category,
        });
        await newUser.save();

        // Generate JWT
        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ message: "Successfully registered", token });
        console.log("New user registered:", newUser);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
});

module.exports = routerSignup;