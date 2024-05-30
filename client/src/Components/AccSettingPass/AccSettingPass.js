import React, { useState } from "react";
import "./AccSettingPass.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";

const AccSettingPass = () => {
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handlePasswordChange = (e) => {
		e.preventDefault();
	};

	const confirmPasswordColor = () => {
		if (newPassword && confirmPassword) {
			return newPassword === confirmPassword ? "#28a745" : "#dc3545";
		}
		return "#ced4da";
	};
	const navigate = useNavigate();

	const handleCancel = () => {
		navigate("/AccountSettings");
		console.log("Cancel button clicked");
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
				<div className="row">
					<div className="col-lg-3 col-md-5 col-sm-12">
						<div
							className="card custom-card"
							style={{ borderColor: "#ca3667", borderRadius: "20px" }}
						>
							<div className="card-body">
								<button
									className="btn custom-button mb-2"
									onClick={handleCancel}
								>
									<i className="bi bi-person-circle m-1"></i>
									Account
								</button>
								<Link to="/AccountSettings" />
								<button className="btn custom-button mb-2">
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
					<div className="col-lg-9 col-md-7 col-sm-12">
						<div
							className="card custom-card-1 p-4"
							style={{ borderColor: "#ca3667", borderRadius: "20px" }}
						>
							<div className="card-body-1">
								<form onSubmit={handlePasswordChange}>
									<h3 className="card-title">Change password</h3>
									<div className="form-group">
										<label htmlFor="currentPassword">Current password</label>
										<input
											type="password"
											className="form-control"
											id="currentPassword"
											value={currentPassword}
											onChange={(e) => setCurrentPassword(e.target.value)}
											required
											style={{ borderColor: "#ca3667" }}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="newPassword">New password</label>
										<input
											type="password"
											className="form-control"
											id="newPassword"
											value={newPassword}
											onChange={(e) => setNewPassword(e.target.value)}
											required
											style={{ borderColor: "#ca3667" }}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="confirmPassword">Confirm password</label>
										<input
											type="password"
											className="form-control"
											id="confirmPassword"
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
											required
											style={{ borderColor: confirmPasswordColor() }}
										/>
									</div>
									<div className="d-flex flex-column flex-md-row justify-content-md-between">
										<div>
											<p>Password must:</p>
											<ul>
												<li>
													Include at least one uppercase and lowercase letter
												</li>
												<li>Include at least one number</li>
												<li>Include at least one symbol</li>
												<li>Be at least 8 characters long</li>
											</ul>
										</div>
										<button
											type="submit"
											className="btn btn-danger align-self-md-end mt-3 mt-md-0"
										>
											Change Password
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccSettingPass;
