import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUpInfluencer.css";

const SignUpInfluencer = () => {
	const [formData, setFormData] = useState({
		userRole: "influencer",
	});

	const navigate = useNavigate();
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData({
			...formData,
			[id]: value,
		});
		validateInput(id, value);
	};

	const validateInput = (id, value) => {
		let error = { ...errors };

		if (id === "userName") {
			error.userName = value.trim() === "" ? "userName is required." : "";
		} else if (id === "email") {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			error.email = !emailPattern.test(value)
				? "Please enter a valid email address."
				: "";
		} else if (id === "password") {
			error.password =
				value.length < 8 ? "Password must be at least 8 characters long." : "";
		} else if (id === "confirmPassword") {
			error.confirmPassword =
				value !== formData.password ? "Passwords do not match." : "";
		} else if (id === "countryCode") {
			error.countryCode =
				value.trim() === "" ? "Country code is required." : "";
		} else if (id === "phoneNumber") {
			const phonePattern = /^[0-9]+$/;
			error.phoneNumber = !phonePattern.test(value)
				? "Please enter a valid phone number."
				: "";
		} else if (id === "price") {
			error.price = value.trim() === "" ? "Price is required." : "";
		} else if (id === "city") {
			error.city = value.trim() === "" ? "City is required." : "";
		} else if (id === "country") {
			error.country = value.trim() === "" ? "Country is required." : "";
		} else if (id === "zipCode") {
			error.zip = value.trim() === "" ? "Please enter a valid zip code." : "";
		} else if (id === "industry") {
			error.industry = value.trim() === "" ? "Industry is required." : "";
		}

		setErrors(error);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let error = {};
		let hasEmptyFields = false;
		Object.keys(formData).forEach((key) => {
			if (formData[key].trim() === "") {
				error[key] = `${
					key.charAt(0).toUpperCase() + key.slice(1)
				} is required`;
				hasEmptyFields = true;
			}
		});

		setErrors(error);
		if (hasEmptyFields) {
			console.log("Form has errors. Please fix them.");
		} else {
			console.log(formData);

			axios
				.post("http://localhost:4000/influencer/signup", formData)
				.then((res) => {
					console.log(res.data);
					console.log("Form submitted successfully");
					navigate("/SignUp");
				})
				.catch((err) => {
					console.error(err.response.data);
				});
		}
	};

	return (
		<div className="container">
			<div className="card" id="border-card">
				<div className="card-body">
					<form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
						<div className="row g-3">
							<div className="col">
								<label
									htmlFor="firstname"
									className="form-label"
									id="form-label1"
								>
									userName
								</label>
								<input
									type="text"
									className="form-control"
									id="userName"
									placeholder="userName"
									aria-label="First name"
									value={formData.userName}
									onChange={handleChange}
								/>
								<span className="error">{errors.userName}</span>
							</div>
						</div>
						<div className="row g-3">
							<div className="col-md-6">
								<label htmlFor="email" className="form-label" id="form-label3">
									Email
								</label>
								<input
									type="email"
									className="form-control"
									id="email"
									value={formData.email}
									onChange={handleChange}
								/>
								<span className="error">{errors.email}</span>
							</div>
							<div className="col-md-6">
								<label
									htmlFor="industry"
									className="form-label"
									id="form-label11"
								>
									Industry
								</label>
								<select
									className="form-select"
									id="industry"
									value={formData.industry}
									onChange={handleChange}
								>
									<option value="">Choose</option>
									<option>Beauty</option>
									<option>Fashion</option>
									<option>Sports</option>
									<option>Technology</option>
									<option>Healthcare</option>
									<option>Food</option>
									<option>Entertainment</option>
									<option>Travel</option>
									<option>Education</option>
								</select>
								<span className="error">{errors.industry}</span>
							</div>
						</div>
						<div className="row g-3">
							<div className="col-md-6">
								<label
									htmlFor="password"
									className="form-label"
									id="form-label4"
								>
									Password
								</label>
								<input
									type="password"
									className="form-control"
									id="password"
									value={formData.password}
									onChange={handleChange}
								/>
								<span className="error">{errors.password}</span>
							</div>
							<div className="col-md-6">
								<label
									htmlFor="confirmPassword"
									className="form-label"
									id="form-label5"
								>
									Confirm Password
								</label>
								<input
									type="password"
									className="form-control"
									id="confirmPassword"
									value={formData.confirmPassword}
									onChange={handleChange}
								/>
								<span className="error">{errors.confirmPassword}</span>
							</div>
						</div>
						<div className="row g-3">
							<div className="col-md-3">
								<label
									htmlFor="countryCode"
									className="form-label"
									id="form-label6"
								>
									Country Code
								</label>
								<select
									className="form-select"
									id="countryCode"
									value={formData.countryCode}
									onChange={handleChange}
								>
									<option>Choose...</option>
									<option>+213</option>
									<option>+973</option>
									<option>+20</option>
									<option>+98</option>
									<option>+964</option>
									<option>+970</option>
									<option>+965</option>
									<option>+961</option>
									<option>+218</option>
									<option>+212</option>
									<option>+968</option>
									<option>+974</option>
									<option>+966</option>
									<option>+963</option>
									<option>+216</option>
									<option>+971</option>
									<option>+222</option>
									<option>+252</option>
									<option>+252</option>
									<option>+249</option>
									<option>+253</option>
								</select>
								<span className="error">{errors.countryCode}</span>
							</div>
							<div className="col-md-3">
								<label
									htmlFor="phoneNumber"
									className="form-label"
									id="form-label7"
								>
									Phone Number
								</label>
								<input
									type="text"
									className="form-control"
									id="phoneNumber"
									value={formData.phoneNumber}
									onChange={handleChange}
								/>
								<span className="error">{errors.phoneNumber}</span>
							</div>

							<div className="col-md-6">
								<label htmlFor="Price" className="form-label" id="form-label12">
									Min Price
								</label>
								<input
									type="price"
									className="form-control"
									id="price"
									value={formData.price}
									onChange={handleChange}
								/>
								<span className="error">{errors.price}</span>
							</div>
						</div>

						<div className="row g-3">
							<div className="col-md-2">
								<label htmlFor="city" className="form-label" id="form-label8">
									City
								</label>
								<input
									type="text"
									className="form-control"
									id="city"
									value={formData.city}
									onChange={handleChange}
								/>
								<span className="error">{errors.city}</span>
							</div>
							<div className="col-md-3">
								<label
									htmlFor="country"
									className="form-label"
									id="form-label9"
								>
									Country
								</label>
								<select
									id="country"
									className="form-select"
									value={formData.country}
									onChange={handleChange}
								>
									<option>Choose...</option>
									<option>Algeria</option>
									<option>Bahrain</option>
									<option>Bahrain</option>
									<option>Egypt</option>
									<option>Iran</option>
									<option>Palestine</option>
									<option>Jordan</option>
									<option>Kuwait</option>
									<option>Lebanon</option>
									<option>Libya</option>
									<option>Morocco</option>
									<option>Oman</option>
									<option>Qatar</option>
									<option>Saudi Arabia</option>
									<option>Syria</option>
									<option>Tunisia</option>
									<option>United Arab Emirates</option>
									<option>Yemen</option>
									<option>Mauritania</option>
									<option>Comoros</option>
									<option>Djibouti</option>
									<option>Somalia</option>
									<option>Sudan</option>
								</select>
								<span className="error">{errors.country}</span>
							</div>
							<div className="col-md-2">
								<label htmlFor="zip" className="form-label" id="form-label10">
									Zip
								</label>
								<input
									type="text"
									className="form-control"
									id="zipCode"
									value={formData.zipCode}
									onChange={handleChange}
								/>
								<span className="error">{errors.zipCode}</span>
							</div>
						</div>

						<div className="col-12">
							<button type="submit" className="btn btn-primary" id="submit">
								SIGN UP
							</button>
						</div>
						<Link to="/SignUp" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUpInfluencer;
