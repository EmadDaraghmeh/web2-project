import React , {useState} from "react" ;
import "./Signupbrand.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Signupbrand() {
	const [formData, setFormData] = useState({
        Emailadaress: 'leenhasoun@gmaim.com',
        BrandName: 'vhfjf',
        confirmpassword: '123456',
        password: '123456',
        countryCode: '+970',
        phoneNumber: '0597448575',
        country: 'efea',
        city: 'feaS',
        Category: 'deF',
        Thenumberoffollowerofcompany: '12124',
        state: 'dsfv',
    });

    const handleChange = (e) => {
        setFormData({ [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/signup', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            
        }
    };
	return (
		<div className="brandSignUpContainer">
			<form className="forms" id="Formss55">
				<div className="mb-3">
					<label htmlFor="disabledTextInput" className="form-label">
						Brand Name
					</label>
					<input
						type="text"
						id="Custom-input1"
						className="form-control custom-input"
						placeholder="Caramale / chocolate"
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control custom-input"
						id="Custom-input1"
						aria-describedby="emailHelp"
					/>
					<div className="row g-3 align-items-center">
						<div className="col-auto"></div>
					</div>

					<div className="row" id="Row44">
						<div className="col" id="Col44">
							<label>Password</label>
							<input
								type="password"
								id="Custom-input1"
								className="form-control custom-input"
								placeholder="Password"
								aria-label="Password"
							/>
						</div>
						<div className="col" id="Col44">
							<label>Confirm Password</label>
							<input
								type="password"
								id="Custom-input1"
								className="form-control custom-input"
								placeholder="Confirm Password"
								aria-label="Confirm Password"
							/>
						</div>
					</div>

					<div className="row" id="Row44">
						<div className="col" id="Col44">
							<label>Country code</label>
							<select className="form-select custom-select" id="Custom-select2">
								<option>Ps(+970)</option>
								<option value={1}>One</option>
								<option value={2}>Two</option>
								<option value={3}>Three</option>
							</select>
						</div>
						<div className="col" id="Col44">
							<label>Phone number</label>
							<input
								type="text"
								id="Custom-input1"
								className="form-control custom-input"
								placeholder="Phone number"
								aria-label="Phone number"
							/>
						</div>
					</div>
					<div className="row" id="Row44">
						<div className="col" id="Col44">
							<label htmlFor="cityInput">City</label>
							<input
								type="text"
								id="Custom-input1"
								className="form-control custom-input"
								placeholder="City"
							/>
						</div>
						<div className="col" id="Col44">
							<label htmlFor="stateInput">State</label>
							<input
								type="text"
								id="Custom-input1"
								className="form-control custom-input"
								placeholder="State"
							/>
						</div>
						<div className="col" id="Col44">
							<label htmlFor="countrySelect">Country</label>
							<select id="Custom-select2" className="form-select custom-select">
								<option value="ps">Palestine</option>
							</select>
						</div>
					</div>

					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							Category
						</label>
						<input
							type="text"
							className="form-control custom-input"
							id="Custom-input1"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput2" className="form-label">
							The number of followers of the company
						</label>
						<input
							type="text"
							className="form-control custom-input"
							id="Custom-input1"
						/>
					</div>

					<div>
						<p className="terms-text" id="Terms-Text11">
							By entering your information you agree to the
							<a href="URL_TO_TERMS" className="terms-link">
								{" "}
								Terms Of Service{" "}
							</a>
							&amp;
							<a href="URL_TO_PRIVACY" className="terms-link" id="Terms-Link11">
								{" "}
								Privacy Policy{" "}
							</a>
							.
							<span className="terms-highlight" id="Terms-Highlight11">
								{" "}
								Our Promise to you :{" "}
							</span>
							your information will always remain SECURE using javascript and
							data security best-practices. We will NEVER rent or sell access to
							your address/contact information!
						</p>
					</div>
				</div>
				<div className="form-buttons" id="Form-Buttons12">
					<button type="button" className="btn back" id="Btnn1">
						Back
					</button>
					<Link to={"/brandsHomePage"}>
						<button type="button" className="btn confirm" id="Btnn2">
							Confirm
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
}

export default Signupbrand;
