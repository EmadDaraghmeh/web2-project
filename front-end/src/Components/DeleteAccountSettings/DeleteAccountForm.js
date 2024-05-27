import React from "react";
import "./DeleteAccountForm.css";
import DeleteAccountConfirmationModal from "./DeleteAccountConfirmationModal";
import { Link, useNavigate } from "react-router-dom";
import "../AccSettingPass/AccSettingPass.css";

function DeleteAccountForm() {
	const navigate = useNavigate();
	const [modalShow, setModalShow] = React.useState(false);

	const handleAccountSettings = () => {
		navigate("/AccountSettings");
		console.log("Cancel button clicked");
	};

	const handleAccountPass = () => {
		navigate("/AccSettingPass");
	};

	const handleDeleteButton = () => {
		navigate("/DeleteAccount");
		console.log("delete button clicked");
	};

	return (
		<div className="account-settings">
			<div className="container">
				<h2>Account Settings</h2>
				<h6>Change your profile and account settings</h6>
				<div className="deleteAccountFlexContainer">
					<div className="row deleteAccountPanel">
						<div>
							<div
								className="card custom-card"
								style={{ borderColor: "#ca3667", borderRadius: "20px" }}
							>
								<div className="card-body">
									<button
										className="btn custom-button mb-2"
										onClick={handleAccountSettings}
									>
										<i className="bi bi-person-circle m-1"></i>
										Account
									</button>
									<Link to="/AccountSettings" />
									<button
										onClick={handleAccountPass}
										className="btn custom-button mb-2"
									>
										<i className="bi bi-file-lock2 m-1"></i>
										Password
									</button>
									<button
										onClick={handleDeleteButton}
										className="btn custom-button mb-2"
									>
										<i className="bi bi-trash m-1"></i>
										Delete account
									</button>
									<button
										className="btn custom-button mb-2"
										style={{ color: "rgb(255, 34, 119)" }}
									>
										<i
											className="bi bi-box-arrow-in-left m-1"
											style={{ color: "black" }}
										></i>
										Sign out
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="deleteAccountContainer col-lg-9 col-md-7 col-sm-12 ">
						<div className="card-body-1">
							<h3>Delete Your Account</h3>
							<p>We are sorry to see you go.</p>
							<hr />
							<p>
								Once your account is deleted, all of your content will be
								permanently gone, including your profile, offers, and
								collaborations.
							</p>
							<button
								className="deleteAccountButton"
								onClick={() => setModalShow(true)}
							>
								Delete Account
							</button>
							<DeleteAccountConfirmationModal
								show={modalShow}
								onHide={() => setModalShow(false)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeleteAccountForm;
