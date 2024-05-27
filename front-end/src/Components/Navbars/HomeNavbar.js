import React, { useState } from "react";
import "./HomeNavbar.css";
import { Link } from "react-router-dom";
import SignPopup from "../SignPopup/SignPopup";

const HomeNavbar = () => {
	const [showPopup, setShowPopup] = useState(false);

	const togglePopup = () => {
		setShowPopup(!showPopup);
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
				<div className="container-fluid" id="cont">
					<Link className="navbarBrandLink" to={"/"}>
						<a className="navbar-brand" href="/" id="InfluenBlend">
							InfluenBlend
						</a>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav" id="nav-ul">
							<Link to={"/"}>
								<li className="nav-item" id="nav-li">
									<a className="nav-link active" aria-current="page" href="/#">
										Home
									</a>
								</li>
							</Link>
							<Link to={"/AboutUs"}>
								<li className="nav-item" id="nav-li">
									<a className="nav-link" href="/#">
										About
									</a>
								</li>
							</Link>
							<Link to={"/ContactUs"}>
								<li className="nav-item" id="nav-li">
									<a className="nav-link" href="/#">
										Contact
									</a>
								</li>
							</Link>
							<Link to={"/Blog"}>
								<li className="nav-item" id="nav-li">
									<a className="nav-link" href="/#">
										Blog
									</a>
								</li>
							</Link>
						</ul>
						<button
							onClick={togglePopup}
							type="button"
							className="btn btn-outline-secondary"
							id="login"
						>
							{" "}
							<i className="bi bi-box-arrow-right"></i>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								id="icone"
								className="bi bi-box-arrow-right"
								viewBox="0 0 16 16"
							></svg>
						</button>

						<Link to="/BrandSignUp">
							<button type="button" className="btn btn-dark" id="join-as-brand">
								JOIN AS BRAND
							</button>
						</Link>

						<Link to="/InfluencerSignUp">
							<button
								type="button"
								className="btn btn-secondary"
								id="join-as-creator"
							>
								JOIN AS CREATOR
							</button>
						</Link>
					</div>
				</div>
			</nav>
			{showPopup && <SignPopup togglePopup={togglePopup} />}{" "}
		</>
	);
};

export default HomeNavbar;
