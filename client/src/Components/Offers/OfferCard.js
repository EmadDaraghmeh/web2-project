import React from "react";
import "./Offers.css";
import { useState } from "react";
import OffersForm from "../MainLandingPage/OffersForm";
import restaurantImage from "../Image/Screenshot 2024-04-26 191047.png";

function OfferCard() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className="card" id="CCaarrdd1122">
			<div className="card-body" id="Card-Body10">
				<div className="top-section" id="Top-section44">
					<img
						src={restaurantImage}
						alt="Burger House"
						className="card-image"
						id="Card-image111"
					/>
					<div className="card-title-text">
						<h5 className="card-title">Burger house</h5>
						<p className="card-text">restaurant</p>
					</div>
				</div>
				<div className="button-group">
					<button className="btn btn-primary" id="bbbtn33">
						view profile
					</button>
					<button
						onClick={toggleVisibility}
						className="btn btn-primary"
						id="bbbtn33"
					>
						view offer
					</button>
					{isVisible && <OffersForm toggleVisibility={toggleVisibility} />}
				</div>
			</div>
		</div>
	);
}

export default OfferCard;
