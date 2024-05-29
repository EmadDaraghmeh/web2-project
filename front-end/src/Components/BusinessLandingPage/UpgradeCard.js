import React from "react";
import "./UpgradeCard.css";
const UpgradeCard = () => {
	return (
		<div className="upgrade-container">
			<div className="info-section">
				<h2>Upgrade to a Pro Account</h2>
				<p>
					Ready to expand your influencer marketing horizons? With a Pro
					Account, you'll enjoy the freedom of unlimited collaborations. Whether
					you're working on multiple campaigns simultaneously or seeking to
					engage with an extensive network of influencers, our Pro Account
					ensures you never miss out on valuable opportunities. Unlock the power
					of limitless collaborations and elevate your brand's presence today.
				</p>
			</div>

			<div className="pricing-section">
				<div className="price-tag">
					UNLIMITED
					<span>$19/mo</span>
				</div>

				<button className="upgrade-button">Upgrade now</button>
			</div>
		</div>
	);
};

export default UpgradeCard;
