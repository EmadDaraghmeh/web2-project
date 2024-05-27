import React, { useState } from "react";
import "./SignPopup.css";

function SignPopup() {
	const [isInfluencer, setIsInfluencer] = useState(false);
	const [isVisible, setIsVisible] = useState(true);

	const handleToggle = () => {
		setIsInfluencer(!isInfluencer);
	};

	const handleClose = () => {
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<>
			<div className="blur-background" onClick={handleClose}></div>
			<div className="signInContainer">
				<form className="form" id="popUp-form">
					<button className="close-btn" onClick={handleClose}>
						&times;
					</button>
					<div className="formInnerContainer">
						<div className="toggle-container">
							<span className={`toggle-label ${!isInfluencer ? "active" : ""}`}>
								Brand
							</span>
							<label className="custom-switch">
								<input type="checkbox" onChange={handleToggle} />
								<span className="custom-slider round"></span>
							</label>
							<span className={`toggle-label ${isInfluencer ? "active" : ""}`}>
								Influencer
							</span>
						</div>

						<div className="mb-3" id="MMmmBBBbb">
							<label
								htmlFor="exampleInputEmail1"
								className="form-label"
								id="FFffOOooRRMMm-LLl"
							>
								Email Address
							</label>
							<input
								type="email"
								className="form-control"
								name="name"
								id="CCccOOOontRROoolLL"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="mb-3" id="MMmmBBBbb">
							<label
								htmlFor="exampleInputPassword1"
								className="form-label"
								id="FFffOOooRRMMm-LLl"
							>
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="CCccOOOontRROoolLL"
							/>
						</div>

						<button
							type="submit"
							className="btn btn-primary"
							id="BBBbbbTTnnnnN"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default SignPopup;
