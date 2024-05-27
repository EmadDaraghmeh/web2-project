import React from "react";
import OfferCard from "./OfferCard";
import "./Offers.css";
function Offers() {
	return (
		<div className="Offers1" id="offerrr456">
			<h1 id="OffersTitle">Offers</h1>
			<div className="container" id="Containerrr222">
				<div className="Title-O"></div>
				<div className="list-group" id="List-group55" role="tablist">
					<a
						className="list-group-item list-group-item-action active"
						id="List-group-item333 "
						data-bs-toggle="list"
						href="#list-ongoing"
						role="tab"
						aria-controls="list-ongoing"
					>
						🔄 ongoing
					</a>
					<a
						className="list-group-item list-group-item-action"
						id="List-group-item333 "
						data-bs-toggle="list"
						href="#list-accepted"
						role="tab"
						aria-controls="list-accepted"
					>
						✔️ accepted
					</a>
					<a
						className="list-group-item list-group-item-action"
						id="List-group-item333 "
						data-bs-toggle="list"
						href="#list-declined"
						role="tab"
						aria-controls="list-declined"
					>
						❌ declined
					</a>
				</div>
				<div className="offercard-container" id="OOffercard-containerrr">
					<OfferCard />
					<OfferCard />
					<OfferCard />
					<OfferCard />
				</div>
			</div>
		</div>
	);
}

export default Offers;
