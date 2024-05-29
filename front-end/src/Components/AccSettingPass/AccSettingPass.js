import React, {   useState } from "react";
import "./AccSettingPass.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {  Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const AccSettingPass = () => {
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const   userId  = "6654e750aa2fe1970119b16c ";
	const navigate = useNavigate();

	const handlePasswordChange = async (e) => {
		e.preventDefault();
		const errors = validatePassword(newPassword);
		if (errors.length > 0) {
			alert(errors.join("\n"));
			return;
		}
		if (newPassword !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		try {
			const response = await axios.patch(`http://localhost:4000/update-password/${userId}`, {
				newPassword,
			});
			alert(response.data ? response.data.message : 'Password updated successfully');
		} catch (error) {
			if (error.response) {
				console.error('Error:', error.response.data);
				alert('Failed to change password: ' + (error.response.data.message || 'Unknown error'));
			} else if (error.request) {
				console.error('Error request:', error.request);
				alert('Failed to change password: Server did not respond.');
			} else {
				console.error('Error message:', error.message);
				alert('Failed to change password: ' + error.message);
			}
		}
	};

	const confirmPasswordColor = () => {
		if (newPassword && confirmPassword) {
			return newPassword === confirmPassword ? "#28a745" : "#dc3545";
		}
		return "#ced4da";
	};
	const handleCancel = () => {
		navigate("/AccountSettings");
		console.log("Cancel button clicked");
	};
	const handleDeleteButton = () => {
		navigate("/DeleteAccount");
		console.log("Delete button clicked");
	};
	const validatePassword = (password) => {
		const errors = [];
		if (password.length < 8) {
			errors.push("Password must be at least 8 characters long.");
		}
		if (!/[A-Z]/.test(password)) {
			errors.push("Password must include at least one uppercase letter.");
		}
		if (!/[a-z]/.test(password)) {
			errors.push("Password must include at least one lowercase letter.");
		}
		if (!/[0-9]/.test(password)) {
			errors.push("Password must include at least one number.");
		}
		if (!/[^A-Za-z0-9]/.test(password)) {
			errors.push("Password must include at least one symbol.");
		}
		if (password.toLowerCase().includes('password')) {
			errors.push('Password cannot contain "password".');
		}
		return errors;
	};

	return (
		<div className="account-settings">
			<div className="container"style={{
                                width: "auto",
                                borderRadius: "20px",
                            }}>
				<h2>Account Settings</h2>
				<h6>Change your profile and account settings</h6>
				<div className="row">
					<div className="col-lg-3 col-md-5 col-sm-12">
						<div className="card custom-card" style={{ borderColor: "#ca3667", borderRadius: "20px" }}>
							<div className="card-body">
								<button className="btn custom-button mb-2" onClick={handleCancel}>
									<i className="bi bi-person-circle m-1"></i>
									Account
								</button>
								<Link to="/AccountSettings" />
								<button className="btn custom-button mb-2">
									<i className="bi bi-file-lock2 m-1"></i>
									Password
								</button>
								<button onClick={handleDeleteButton} className="btn custom-button mb-2">
									<i className="bi bi-trash m-1"></i>
									Delete account
								</button>
								<button className="btn custom-button mb-2" style={{ color: "rgb(255, 34, 119)" }}>
									<i className="bi bi-box-arrow-in-left m-1" style={{ color: "black" }}></i>
									Sign out
								</button>
							</div>
						</div>
					</div>
					<div className="col-lg-9 col-md-7 col-sm-12">
						<div className="card custom-card-1 p-4" style={{ borderColor: "#ca3667", borderRadius: "20px" }}>
							<div className="card-body-1 col-sm-12">
								<form onSubmit={handlePasswordChange}>
									<h3 className="card-title">Change password</h3>
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
											<li>Include at least one uppercase and lowercase letter</li>
                                                <li>Include at least one number</li>
                                                <li>Include at least one symbol</li>
                                                <li>Be at least 8 characters long</li>
											</ul>
										</div>
										<button type="submit" className="btn btn-danger align-self-md-end mt-3 mt-md-0">
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