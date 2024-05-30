import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './SignUpInfluencer.css';

const SignUpInfluencer = () => {
const [form_Data, setFormData] = useState({
firstname: '',
lastname: '',
email: '',
password: '',
confirmPassword: '',
countryCode: '',
phoneNumber: '',
city: '',
country: '',
zip: ''
});

const navigate = useNavigate();


const [errors, setErrors] = useState({});

const handleChange = (e) => {
const { id, value } = e.target;
setFormData({
...form_Data,
[id]: value
});
validateInput(id, value);
};

const validateInput = (id, value) => {
let error = { ...errors };



if (id === 'firstname') {
error.firstname = value.trim() === '' ? 'First name is required.' :''}

else if (id === 'lastname') {
error.lastname = value.trim() === '' ? 'Last name is required.' : '';
}

else if (id === 'email') {
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
error.email = !emailPattern.test(value) ? 'Please enter a valid email address.' : '';
} 


else if (id === 'password') {
error.password = value.length < 8 ? 'Password must be at least 8 characters long.' : '';
} 


else if (id === 'confirmPassword') {
error.confirmPassword = value !== form_Data.password ? 'Passwords do not match.' : '';
}

else if (id === 'countryCode') {
error.countryCode = value.trim() === '' || value === 'Choose...' ? 'Country code is required.' : '';
}

else if (id === 'phoneNumber') {
const phonePattern = /^[0-9]+$/;
error.phoneNumber = !phonePattern.test(value) || value.trim() === '' ? 'Please enter a valid phone number.' :'';
}

else if (id === 'city') {
error.city = value.trim() === '' ? 'City is required.' : '';
}

 else if (id === 'country') {
error.country = value.trim() === '' || value === 'Choose...' ? 'Country is required.' : '';
}

else if (id === 'zip') {
error.zip = value.trim() === '' ? 'Please enter a valid zip code.' : '';
}
setErrors(error);
};


const handleSubmit = (e) => {
 e.preventDefault();
let error = {};
let hasEmptyFields = false;
Object.keys(form_Data).forEach((key) => {
if (form_Data[key].trim() === '') {
error[key] =` ${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
hasEmptyFields = true;

}
});


setErrors(error);
if (hasEmptyFields) {
console.log("Form has errors. Please fix them.");
} else {
 
  navigate("/SignUp");
console.log("Form submitted successfully");

}


};

return (


<div className='container'>


<div className="card" id="border-card">
<div className="card-body">
<form className="d-flex flex-column gap-4" onSubmit={handleSubmit} >
<div className="row g-3">
<div className="col">
<label htmlFor="firstname" className="form-label" id="form-label1">First Name</label>
<input type="text" className="form-control" id="firstname" placeholder="First name" aria-label="First name"
value={form_Data.firstname} onChange={handleChange} />
<span className="error">{errors.firstname}</span>
</div>



<div className="col">
<label htmlFor="lastname" className="form-label" id="form-label2">Last Name</label>
<input type="text" className="form-control" id="lastname" placeholder="Last name" aria-label="Last name"
value={form_Data.lastname} onChange={handleChange} />
<span className="error">{errors.lastname}</span>
</div>
</div>


<div className="row g-3">
<div className="col-md-6">
<label htmlFor="email" className="form-label" id="form-label3">Email</label>
<input type="email" className="form-control" id="email"
value={form_Data.email} onChange={handleChange} />
<span className="error">{errors.email}</span>
</div>
</div>


<div className="row g-3">
<div className="col-md-6">
<label htmlFor="password" className="form-label" id="form-label4">Password</label>
<input type="password" className="form-control" id="password"
value={form_Data.password} onChange={handleChange} />
<span className="error">{errors.password}</span>
</div>



<div className="col-md-6">
<label htmlFor="confirmPassword" className="form-label" id="form-label5">Confirm Password</label>
<input type="password" className="form-control" id="confirmPassword"
value={form_Data.confirmPassword} onChange={handleChange} />
<span className="error">{errors.confirmPassword}</span>
</div>
</div>



<div className="row g-3">
<div className="col-md-3">
<label htmlFor="countryCode" className="form-label" id="form-label6">Country Code</label>
<select className="form-select" id="countryCode" value={form_Data.countryCode} onChange={handleChange}>
<option>Choose...</option>
<option>+213</option>
<option >+973</option>
<option >+20</option>
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
<label htmlFor="phoneNumber" className="form-label" id="form-label7">Phone Number</label>
<input type="text" className="form-control" id="phoneNumber"
value={form_Data.phoneNumber} onChange={handleChange} />
<span className="error">{errors.phoneNumber}</span>
</div>
</div>


<div className="row g-3">
<div className="col-md-2">
<label htmlFor="city" className="form-label" id="form-label8">City</label>
<input type="text" className="form-control" id="city"
value={form_Data.city} onChange={handleChange} />
<span className="error">{errors.city}</span>
</div>


<div className="col-md-3">
<label htmlFor="country" className="form-label" id="form-label9">Country</label>
<select id="country" className="form-select" value={form_Data.country} onChange={handleChange}>
<option >Choose...</option>
<option >Algeria</option>
<option >Bahrain</option>
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
<label htmlFor="zip" className="form-label" id="form-label10">Zip</label>
<input type="text" className="form-control" id="zip" value={form_Data.zip} onChange={handleChange} />
<span className="error">{errors.zip}</span>
</div>
</div>



<div className="col-12">
<button type="submit" className="btn btn-primary" id="submit" onClick={handleSubmit}>SIGN UP</button>
</div>
<Link to="/SignUp" />
</form>
</div>
</div>
</div>
);
}
export default SignUpInfluencer;