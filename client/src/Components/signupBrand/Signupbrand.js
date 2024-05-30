import React, { useState } from "react";
import "./Signupbrand.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function Signupbrand() {
    const [formData, setFormData] = useState({
        userRole:'brand'
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/api/signup', formData);
            console.log(response.data);
            navigate('/brandsHomePage');
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div className="brandSignUpContainer">
            <form className="forms" id="Formss55" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Brand Name</label>
                    <input
                        type="text"
                        name="userName"
                        className="form-control custom-input"
                        placeholder="Caramale / chocolate"
                        value={formData.userName}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control custom-input"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="row" id="Row44">
                    <div className="col" id="Col44">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control custom-input"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col" id="Col44">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control custom-input"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row" id="Row44">
                    <div className="col" id="Col44">
                        <label>Country code</label>
                        <select
                            name="countryCode"
                            className="form-select custom-select"
                            value={formData.countryCode}
                            onChange={handleChange}
                        >
                            <option value="+970">Ps(+970)</option>
                            <option value="+1">One</option>
                            <option value="+2">Two</option>
                            <option value="+3">Three</option>
                        </select>
                    </div>
                    <div className="col" id="Col44">
                        <label>Phone number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            className="form-control custom-input"
                            placeholder="Phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row" id="Row44">
                    <div className="col" id="Col44">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            className="form-control custom-input"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col" id="Col44">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            name="state"
                            className="form-control custom-input"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col" id="Col44">
                        <label htmlFor="country">Country</label>
                        <select
                            name="country"
                            className="form-select custom-select"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="ps">Palestine</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="Category" className="form-label">Category</label>
                    <input
                        type="text"
                        name="Category"
                        className="form-control custom-input"
                        placeholder="Category"
                        value={formData.Category}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Thenumberoffollowerofcompany" className="form-label">
                        The number of followers of the company
                    </label>
                    <input
                        type="text"
                        name="Thenumberoffollowerofcompany"
                        className="form-control custom-input"
                        placeholder="Number of followers"
                        value={formData.Thenumberoffollowerofcompany}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <p className="terms-text" id="Terms-Text11">
                        By entering your information you agree to the
                        <a href="URL_TO_TERMS" className="terms-link"> Terms Of Service </a>
                        &amp;
                        <a href="URL_TO_PRIVACY" className="terms-link" id="Terms-Link11">
                            Privacy Policy
                        </a>.
                        <span className="terms-highlight" id="Terms-Highlight11">
                            Our Promise to you:
                        </span>
                        your information will always remain SECURE using JavaScript and
                        data security best-practices. We will NEVER rent or sell access to
                        your address/contact information!
                    </p>
                </div>
                <div className="form-buttons" id="Form-Buttons12">
                    <button type="button" className="btn back" id="Btnn1">Back</button>
                    <button type="submit" className="btn confirm" id="Btnn2">Confirm</button>
                </div>
            </form>
        </div>
    );
}

export default Signupbrand;
