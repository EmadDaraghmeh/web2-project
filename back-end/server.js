
const express = require("express");
const mongoose = require("mongoose");
const routerBlog = require("./src/Routes/Brand");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { PORT, mongoDBURL } = require("./config");
const SignUpInfluencer=require('./src/Controller/SignUpInfluencerRouter')
const routerCollab = require("./src/Controller/BrandCollab");
const routerBprofile = require("./src/Controller/BrandProfile");
const routerLinks = require("./src/Controller/SignUpLinks");
const path=require('path')

const app = express();


app.use(express.json());
app.use(cors());


// app.use("/brands", routerBlog);
app.use("/brands", routerBlog);
app.use("/SignUpInfluencerRouter",SignUpInfluencer);
app.use("/collab", routerCollab);
app.use("/bprofile", routerBprofile);
app.use("/link", routerLinks);
app.get("*", (req, res) => {
	console.log(req);
	return res.status(404).send(path.dirname(__filename));
});

mongoose
	.connect(mongoDBURL,{useNewUrlParser: true,useUnifiedTopology: true})
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
