import React, { useState } from "react";
import "./OffersForm.css";

const OffersForm = ({ toggleVisibility }) => {
	const [isEditable, setIsEditable] = useState(false);
	const [formData, setFormData] = useState({
		platform: "Platform",
		terms: "Terms",
		startDate: "2023-01-01",
		endDate: "2023-12-31",
		price: "1000",
	});

	const [originalData, setOriginalData] = useState({});

	const handleEdit = () => {
		setOriginalData({ ...formData });
		setIsEditable(true);
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
					{!isEditable ? (
						<>
							<button id="declineButton">Decline</button>
							<button className="blueButtons" onClick={handleEdit}>
								Edit
							</button>
							<button className="blueButtons">Accept</button>
						</>
					) : (
						<>
							<button className="blueButtons" onClick={handleBack}>
								Back
							</button>
							<button className="blueButtons">Send</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default OffersForm;
