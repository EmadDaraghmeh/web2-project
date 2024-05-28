
const express = require("express");
const mongoose = require("mongoose");
const routerBlog = require("./src/Routes/Brand");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { PORT, mongoDBURL } = require("./config");
const SignUpInfluencer = require('./src/Controller/SignUpInfluencerRouter')
const path = require('path')
const blogPost = require("./src/Controller/backend/routes/BlogRoutes")
const bodyParser = require('body-parser');
const signupBrandRouter = require('./src/Controller/SignupBrand2');
const SignInPI=require('./src/Controller/SignInPI')
const app = express();



// app.use("/brands", routerBlog);
app.use(bodyParser.json());
app.use('/api/signup', signupBrandRouter);
app.use("/brands", routerBlog);
app.use("/SignUpInfluencerRouter", SignUpInfluencer);
app.use('/Blog', blogPost)
app.get("*", (req, res) => {
	console.log(req);
	return res.status(404).send(path.dirname(__filename));
});
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
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
