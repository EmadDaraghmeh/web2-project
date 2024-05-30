import React, { useEffect, useState } from "react";
import OfferCard from "./OfferCard";
import "./Offers.css";
import { useAuth } from "../../Contexts/AuthContext";
import axios from "axios";
function Offers() {
	const { authUser } = useAuth();
	const [offers, setOffers] = useState([]);
	const [activeTab, setActiveTab] = useState("ongoing");

	const fetchOffers = () => {
		axios
			.get(`http://localhost:4000/offers/user/${authUser._id}`)
			.then((res) => {
				setOffers(res.data);
			})
			.catch((e) =>
				console.log("Error occured while getting offers for a user", e)
			);
	};

	useEffect(() => {
		if (!authUser) return;
		fetchOffers();
	}, [authUser]);

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
						onClick={() => setActiveTab("ongoing")}
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
						onClick={() => setActiveTab("accepted")}
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
						onClick={() => setActiveTab("declined")}
					>
						❌ declined
					</a>
				</div>
				<div className="offercard-container" id="OOffercard-containerrr">
					{offers.map((offer) => {
						return offer.state === activeTab ? (
							<OfferCard
								offerId={offer._id}
								price={offer.price}
								platform={offer.platform}
								startDate={offer.startDate}
								terms={offer.terms}
								endDate={offer.endDate}
								onUpdate={fetchOffers}
								state={offer.state}
								sentBy={offer.sentBy}
							/>
						) : null;
					})}
				</div>
			</div>
		</div>
	);
}

export default Offers;
