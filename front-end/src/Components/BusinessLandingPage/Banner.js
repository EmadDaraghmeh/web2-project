import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
	return (
		<div className="banner">
			<div className="waveWrapper waveAnimation">
				<div className="waveWrapperInner bgTop">
					<div
						className="wave waveTop"
						style={{
							backgroundImage:
								"url('http://front-end-noobs.com/jecko/img/wave-top.png')",
						}}
					></div>
				</div>
				<div className="waveWrapperInner bgMiddle">
					<div
						className="wave waveMiddle"
						style={{
							backgroundImage:
								"url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
						}}
					></div>
				</div>
				<div className="waveWrapperInner bgBottom">
					<div
						className="wave waveBottom"
						style={{
							backgroundImage:
								"url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
						}}
					></div>
				</div>
			</div>
			<div className="banner-content">
				<h1>Take your business to the next level</h1>
				<p>
					You are one step away from finding the best influencer/content creator
					that will level your business up. START NOW!
				</p>
				<Link to="/all" className="explore-button">
					Explore Influencers
				</Link>
			</div>
		</div>
	);
}

export default Banner;
