import React, { useEffect } from "react";
import "./MainLandingPage.css";
import MainPageCarousel from "./MainPageCarousel";
import BlogPostsCard from "./BlogPostsCard";
const MainLandingPage = () => {
	const blogPostsData = [
		{
			image: "./images/blog1.jpg",
			tag: "digital marketing",
			time: "2 min ago",
			title: "Types of digital marketing",
		},
		{
			image: "./images/blog2.jpg",
			tag: "photography",
			time: "2 min ago",
			title: "How to take the best photos for your brand",
		},
		{
			image: "./images/blog3.jpg",
			tag: "stocks",
			time: "2 min ago",
			title: "How did marketing made businesses rise",
		},
		{
			image: "./images/blog4.jpg",
			tag: "analytics",
			time: "2 min ago",
			title: "analyzing marketing stratigies",
		},
		{
			image: "./images/blog5.jpg",
			tag: "digital marketing",
			time: "2 min ago",
			title: "How to make a marketing plan for your business",
		},
		{
			image: "./images/blog6.jpg",
			tag: "meta",
			time: "2 min ago",
			title: "Facebook marketing stratigies",
		},
	];
	const firstBrandPictures = [
		<img
			id="firstImage"
			src="/images/brand2.jpeg"
			alt="brand2"
			loading="lazy"
		/>,
		<img
			id="secondImage"
			src="/images/barnd1.jpeg"
			alt="brand1"
			loading="lazy"
		/>,
		<img
			id="thirdImage"
			src="/images/brand3.jpeg"
			alt="brand3"
			loading="lazy"
		/>,
	];

	const secondBrandPictures = [
		<img
			id="firstImageBrand"
			src="/images/brand4.jpeg"
			alt="brand4"
			loading="lazy"
		/>,
		<img
			id="secondImageBrand"
			src="/images/brand5.jpeg"
			alt="brand5"
			loading="lazy"
		/>,
	];

	const carouselItemsData = [
		{
			slidePhoto: "./images/car1.jpg",
			title: "Step 1 ",
			paragraph:
				"Sign up - as a brand or as an influencer - and fill everything needed.",
		},
		{
			slidePhoto: "./images/car1.jpg",
			title: "Step 2 ",
			paragraph:
				"Complete your profile and start looking for infuencers for your brands, or brands to collaborate with if you are an influencer.",
		},
		{
			slidePhoto: "./images/car1.jpg",
			title: "Step 3 ",
			paragraph:
				"Contact with brands or influencers through our chat system, send and recieve offers and the lest step COLLAB.",
		},
	];
	useEffect(() => {});
	return (
		<div>
			<div class="mainPageContainer">
				<div class="content">
					<div class="innerContainer " id="firstContainer">
						<div className="info">
							<h4 id="topTitle"> INFLUENCER/CREATOR COLLABORATING</h4>
							<h1 id="mainTitle">
								{" "}
								Find & Hire the best Influencer/Creator for your business
							</h1>
							<p>
								Connect with influencers who share your brand's values and reach
								your target audience
							</p>
							<a href="#howItWorksCarousel">
								<button className="learnMoreButton"> Learn More </button>
							</a>
							<button className="watchDemoButton">
								{" "}
								<i className="fa fa-play-circle"></i> Watch How It Works
							</button>
						</div>
						<div class="image">
							<img
								alt="mainInmage"
								id="mainPageImage"
								src="./images/mainphoto.png"
							></img>
						</div>
					</div>
				</div>

				<div className="mainPageContainer">
					<div class="content">
						<div class="innerContainer">
							<div class="image">
								<img alt="aboutUsImage" src="./images/aboutus.png"></img>
							</div>
							<div class="info">
								<h2> We are InfluenBlend</h2>
								<br />
								<p className="mainParagraph">
									Our mission is to provide a seamless space where influencers
									can amplify their voices and brands can amplify their
									messages, resulting in collaborations that resonate with
									audiences worldwide.
								</p>
								<button id="aboutUsButton" className="learnMoreButton">
									{" "}
									Learn More{" "}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="howItWorksCarousel">
				<h2 className="carouselMainTitle"> How does it work ? </h2>
				<MainPageCarousel
					className="landingPageCarousel"
					carouselItemsData={carouselItemsData}
				></MainPageCarousel>
			</div>
			<br />
			<br />
			<br />
			<br />
			<div className="mainPageContainer">
				<div class="content">
					<div class="innerContainer">
						<div class="image">
							<img
								id="ourValuesImage"
								alt="ourValuesImage"
								src="./images/ourvalues.png"
							></img>
						</div>
						<div className="ourValuesContainer">
							<div>
								<h3>Nulla lobortis nunc vitae nisi semper velit</h3>
								<p className="mainParagraph ourValuesFirst">
									Vestibulum sit amet tortor libero lobortis semper at et odio.
									In eu tellus tellus. Pellentesque ullamcorper ultrices. Aenean
									facilisis vitae purus facilisis semper.
								</p>
							</div>
							<div className="ourValuesInnerContainer">
								<div>
									<img
										className="ourValuesIcons"
										src="./images/ourvaluesicon1.png"
										alt="ourvaluesicon"
									></img>
									<h3>Nulla lobortis nunc </h3>
									<p className="mainParagraph">
										Vestibulum sit amet tortor libero lobortis semper at et
										odio. In eu tellus tellus. Pellentesque ullamcorper
										ultrices. Aenean facilisis vitae purus facilisis semper.
									</p>
								</div>
								<div>
									<img
										className="ourValuesIcons"
										src="./images/ourvaluesicon2.png"
										alt="ourvaluesicon"
									/>
									<h3>Nulla lobortis nunc </h3>
									<p className="mainParagraph">
										Vestibulum sit amet tortor libero lobortis semper at et
										odio. In eu tellus tellus. Pellentesque ullamcorper
										ultrices. Aenean facilisis vitae purus facilisis semper.
									</p>
								</div>
							</div>
							<div className="ourValuesInnerContainer">
								<div>
									<img
										className="ourValuesIcons"
										src="./images/ourvaluesicon3.png"
										alt="ourvaluesicon"
									/>
									<h3>Nulla lobortis nunc </h3>
									<p className="mainParagraph">
										Vestibulum sit amet tortor libero lobortis semper at et
										odio. In eu tellus tellus. Pellentesque ullamcorper
										ultrices. Aenean facilisis vitae purus facilisis semper.
									</p>
								</div>
								<div>
									<img
										className="ourValuesIcons"
										src="./images/ourvaluesicon4.png"
										alt="ourvaluesicon"
									/>
									<h3>Nulla lobortis nunc </h3>
									<p className="mainParagraph">
										Vestibulum sit amet tortor libero lobortis semper at et
										odio. In eu tellus tellus. Pellentesque ullamcorper
										ultrices. Aenean facilisis vitae purus facilisis semper.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="checkoutContainer">
				<div className="influencerContainer">
					<div className="imagesSection">
						{firstBrandPictures.map((item) => {
							return item;
						})}
					</div>
					<div className="textSection">
						<div className="checkoutTitle">find brands</div>
						<h5>They could be looking for someone like you.</h5>
						<button className="checkoutButton">Check out</button>
					</div>
				</div>
				<div className="brandContainer">
					<div className="imagesSection">
						{secondBrandPictures.map((item) => {
							return item;
						})}
					</div>
					<div className="textSection2">
						<div className="checkoutTitle">find influencers</div>
						<h5>Find the best content creator for your brand.</h5>
						<button className="checkoutButton">Check out</button>
					</div>
				</div>
			</div>

			<BlogPostsCard blogPostsData={blogPostsData}></BlogPostsCard>
			<div className="qaDiv">
				<div>
					<h3>Have any questions?</h3>
					<p>
						please dont hesitate to contact us so we could answer all your
						inquieries{" "}
					</p>
				</div>
				<div className="buttonWrapper">
					<button className="writeToUsButton"> Write to us </button>
				</div>
			</div>
		</div>
	);
};

export default MainLandingPage;
