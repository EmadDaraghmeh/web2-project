import React from "react";
import "./InfluenBlend.css";
import { Link } from "react-router-dom";

import picture1 from "../Image/picture1.png";
import picture2 from "../Image/‏‏picture2.png";
import picture3 from "../Image/‏‏picture3.png";
import picture4 from "../Image/picture4.png";

function InfluenBlend() {
	return (
		<div className="AboutPage">
			<div className="container1" id="container1-about">
				<img className="coverphoto" src={picture1} alt="Cover"></img>
				<div className="Heading" id="Heading-about">
					<h1 className="main-title" id="main-title-about">InfluenBlend</h1>
					<h1 className="subtitle" id="subtitle-about">
						Where Influencers and Brands Flourish Together
					</h1>
				</div>
			</div>

			<div className="paragraph1" id="paragraph1-about">
				<span className="p1">
					InfluenBlend isn't just a platform—it's a thriving hub where
					influencers and brands come together to forge impactful partnerships.
					Our mission is to provide a seamless space where influencers can
					amplify their voices and brands can amplify their messages, resulting
					in collaborations that resonate with audiences worldwide. With
					tailored profiles for both influencers and brands to showcase their
					work, coupled with our intuitive chat system, filtered search options,
					and the ability to send offers directly, connecting has never been
					easier. At InfluenBlend, we prioritize nurturing every collaboration,
					providing unparalleled support and guidance to ensure success. Our
					dedicated team is committed to celebrating the achievements born from
					our collaborative efforts. Join us today and experience the
					transformative power of collaboration with InfluenBlend. Together,
					let's create something extraordinary.
				</span>
			</div>
			<hr></hr>

			<div className="container2">
				<div className="container2-a">
					<div className="we-help-brand" id="we-help-brand-about">
						<h1>We Help Brand</h1>
					</div>
					<div className="paragraph2" id="paragraph2-about">
						<p>
							At InfluenBlend, we specialize in connecting brands with the
							perfect influencers to effectively market their businesses.
							Whether you're a startup looking to boost brand awareness or an
							established company launching a new product, we help you find the
							ideal influencer to amplify your message and drive engagement.
							With our tailored profiles and advanced search options, we ensure
							that brands discover influencers who authentically promote their
							products or services, resulting in impactful collaborations. Join
							us today and unlock the full potential of influencer marketing for
							your brand.
						</p>
					</div>
				</div>
				<img className="brandphoto" src={picture2} alt="Brand"></img>
				<Link className="join-as-brand-link" to="/BrandSignUp">
				<div className="brand-button" id="brand-button-about">
					<span className="see-details" id="see-details-about">JOIN AS BRAND</span>
				</div>
				</Link>
			</div>
			<hr></hr>

			<div className="container3">
				<div className="we-help-creator" id="we-help-creator-about">
					<h1>We Help Creator</h1>
				</div>
				<div className="paragraph3" id="paragraph3-about">
					<p>
						At InfluenBlend, we specialize in facilitating collaborations
						between influencers and brands within the same niche. Our platform
						streamlines the process, enabling influencers to connect with brands
						that align perfectly with their content and audience. Whether you're
						a seasoned influencer looking to expand your partnerships or just
						starting out in the industry, we're here to help you find brands
						that resonate with your unique voice and style. With our curated
						network and personalized recommendations, we ensure that creators
						discover brand collaborations that not only enhance their content
						but also foster genuine connections with their audience. Join us
						today and take your influencer career to new heights with meaningful
						collaborations tailored to your niche.
					</p>
				</div>
				<img className="creatorphoto" src={picture3} alt="Creator"></img>
				<Link className="join-as-creator-link" to="/InfluencerSignUp">
				<div className="creator-button"id="creator-button-about">
					<span className="see-details2" id="see-details2-about">JOIN AS CREATOR</span>
				</div>
				</Link>
			</div>

			<div className="container4" id="container4-about">
				<div className="container4-a">
					<div className="why-choose-us" id="why-choose-us-about">
						<h1>Why Choose Us?</h1>
					</div>
					<div className="paragraph4" id="paragraph4-about">
						<p>
							InfluenBlend stands out as the premier platform for influencers
							and brands seeking seamless collaboration. What sets us apart? Our
							user-friendly interface, advanced search filters, and personalized
							matchmaking capabilities make finding the perfect partnership
							effortless. With our dedication to fostering genuine connections
							and our unwavering commitment to supporting both influencers and
							brands every step of the way, we ensure that every collaboration
							is not only successful but also rewarding. Whether you're an
							influencer looking to expand your reach or a brand seeking
							authentic promotion, InfluenBlend provides the ideal platform to
							unlock the full potential of influencer marketing. Join us today
							and experience the difference for yourself.
						</p>
					</div>
				</div>
				<img className="finalphoto" src={picture4} alt="Final"></img>
			</div>
		</div>
	);
}

export default InfluenBlend;
