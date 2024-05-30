import React, { useState } from "react";
import "./OffersForm.css";
import axios from "axios";
import { useAuth } from "../../Contexts/AuthContext";

const OffersForm = ({
	toggleVisibility,
	offerId,
	platform,
	terms,
	startDate,
	endDate,
	price,
	state,
	sentBy,
	onUpdate,
}) => {
	const { authUser } = useAuth();
	const [isEditable, setIsEditable] = useState(false);
	const [formData, setFormData] = useState({
		platform: platform,
		terms: terms,
		startDate: startDate,
		endDate: endDate,
		price: price,
	});

	const [originalData, setOriginalData] = useState({});

	const handleEdit = () => {
		setOriginalData({ ...formData });
		setIsEditable(true);
	};

	const editOfferDetails = (status) => {
		const reqBody = {
			...formData,
			state: status,
			sentBy: status === "ongoing" ? authUser._id : sentBy,
		};
		console.log("sending req body = ", reqBody);
		axios
			.put(`http://localhost:4000/offers/${offerId}`, reqBody)
			.then((res) => {
				onUpdate();
			})
			.catch((e) => {
				console.log("Error occurred while editing an offer", e);
			});
	};
	const handleBack = () => {
		setFormData(originalData);
		setIsEditable(false);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className="formPopup">
			<div className="formContainer">
				<button className="closeButton" onClick={toggleVisibility}>
					X
				</button>
				<h3>Collaboration Offer</h3>
				<div>
					<label htmlFor="platform">Platform:</label>
					<input
						className="formInputs"
						type="text"
						id="platform"
						name="platform"
						value={formData.platform}
						onChange={handleChange}
						readOnly={!isEditable}
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="terms">Terms:</label>
					<textarea
						className="formInputs"
						id="terms"
						name="terms"
						value={formData.terms}
						onChange={handleChange}
						readOnly={!isEditable}
					/>
				</div>
				<div className="datesContainer">
					<div>
						<label htmlFor="startDate">Starts from:</label>
						<input
							className="formInputs"
							type="date"
							id="startDate"
							name="startDate"
							value={formData.startDate}
							onChange={handleChange}
							readOnly={!isEditable}
						/>
					</div>
					<div>
						<label htmlFor="endDate">To:</label>
						<input
							className="formInputs"
							type="date"
							id="endDate"
							name="endDate"
							value={formData.endDate}
							onChange={handleChange}
							readOnly={!isEditable}
						/>
					</div>
				</div>
				<div className="priceAndActionsContainer">
					<label htmlFor="price">Price:</label>
					<input
						className="formInputs"
						type="text"
						id="price"
						name="price"
						value={formData.price}
						onChange={handleChange}
						readOnly={!isEditable}
					/>
					{state === "ongoing" && sentBy !== authUser._id ? (
						!isEditable ? (
							<>
								<button
									id="declineButton"
									onClick={() => {
										editOfferDetails("declined");
									}}
								>
									Decline
								</button>
								<button className="blueButtons" onClick={handleEdit}>
									Edit
								</button>
								<button
									className="blueButtons"
									onClick={() => {
										editOfferDetails("accepted");
									}}
								>
									Accept
								</button>
							</>
						) : (
							<>
								<button className="blueButtons" onClick={handleBack}>
									Back
								</button>
								<button
									className="blueButtons"
									onClick={() => editOfferDetails("ongoing")}
								>
									Send
								</button>
							</>
						)
					) : null}
				</div>
			</div>
		</div>
	);
};

export default OffersForm;
