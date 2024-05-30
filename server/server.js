const express = require("express");
const mongoose = require("mongoose");
const routerBlog = require("./src/Controller/BrandRoutes");
const routerCollab = require("./src/Controller/BrandCollab");
const routerBprofile = require("./src/Controller/BrandProfile");
const routerLinks = require("./src/Controller/SignUpLinks");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Influencer = require("../server/src/Controller/Influencer");
const { PORT, mongoDBURL } = require("./config");
const signupBrandRouter = require("./src/Controller/SignupBrand2");
const offer = require("./src/Controller/Offerr");
const routerUsers = require("./src/Controller/UserRoutes");
const signUpInfluencer = require("./src/Controller/SignUpInfluencerRouter");
const routerOffers = require("./src/Controller/OfferRoutes");
const app = express();
 
// console.log(typeof BrandModel)
app.use(express.json());
 

/*serves static assets*/
app.use(express.static("public"));
/* required to read data from post */
app.use(express.urlencoded({ extended: false }));

app.use("/offers", offer);
app.use("/api/signup", signupBrandRouter);

app.use(cookieParser());
app.use("/influencer", Influencer);
 
app.use(cors({
    origin: 'http://localhost:3000'}));
app.use(cookieParser());

// app.use("/", routerBlog);
 
app.get("/", (req, res) => {
	console.log(req);
	return res.status(234).send("Hello");
});

app.use('/offer' , offer)
app.use('/api/signup', signupBrandRouter);
 
app.use("/collab", routerCollab);
app.use("/offers", routerOffers);
app.use("/bprofile", routerBprofile);
app.use("/link", routerLinks);
app.use('/influencer',Influencer);

app.use("/brands", routerBlog);
app.use("/influencer", signUpInfluencer);
app.use("/users", routerUsers);
app.get("*", (req, res) => {
	console.log(req);
	return res.status(404).send("Hello");
});

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log("App connected to database");
		app.listen(PORT, () => {
			console.log(`server running on port ${PORT}`);
			console.log(`http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
