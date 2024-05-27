const express = require("express");
const mongoose = require("mongoose");
const routerBlog = require("./src/Routes/Brand");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { PORT, mongoDBURL } = require("./config");
const SignUpInfluencer=require('./src/Controller/SignUpInfluencerRouter')
const path=require('path')
const app = express();

// console.log(typeof BrandModel)
app.use(express.json());
app.use(cors());
/*serves static assets*/
app.use(express.static("public"));
/* required to read data from post */
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.get("/", (req, res) => {
	console.log(req);
	return res.status(234).send("Hello");
});

// app.use("/brands", routerBlog);
app.use("/brands", routerBlog);
app.use("/SignUpInfluencerRouter",SignUpInfluencer);
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
