import React, { useState } from "react";
import "./SignPopup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Contexts/AuthContext";

function SignPopup() {
	const [isInfluencer, setIsInfluencer] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setAuthUser, setIsLoggedIn } = useAuth();
	const navigate = useNavigate();
	const body = {
		email: email,
		password: password,
	};
	const handleSignIn = () => {
		axios
			.post("http://localhost:4000/users/Signin", body)
			.then((res) => {
				console.log(res.data._id);
				setAuthUser(res.data);
				setIsLoggedIn(true);

				navigate(
					res.data.userRole === "brand" ? "/brandsHomePage" : "/InfluencerHome"
				);
			})
			.catch((e) => {
				console.log("Error occurred while trying to sign in", e);
			});
	};
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
				<div className="form" id="popUp-form">
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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
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
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<button
							type="submit"
							className="btn btn-primary"
							id="BBBbbbTTnnnnN"
							onClick={handleSignIn}
						>
							Sign in
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignPopup;
