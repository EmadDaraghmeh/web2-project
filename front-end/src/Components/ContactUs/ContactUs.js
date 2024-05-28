import './ContactUs.css'
import React from "react"
import image from "./photo-1486312338219-ce68d2c6f44d.avif"
import { useState } from 'react'
import axios from 'axios'
const ContactUs = () => {

  const [formData, setFormData] = useState({});

  const [errors, setErrors] =useState({});

  const handleChange = (e) => {
  const { id, value } = e.target;
  setFormData({
  ...formData,
  [id]: value
  });
  validateInput(id, value);
  };
  
  const validateInput = (id, value) => {
  let error = { ...errors };
  

  
   if (id === 'F_name') {
   error.F_tname = value.trim() === '' ? 'First name is required.' :''
  }
  
   else if (id === 'L_name') {
   error.L_name = value.trim() === '' ? 'Last name is required.' : '';
   }
  
  else if (id === 'E_mail') {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  error.E_mail= !emailPattern.test(value) ? 'Please enter a valid email address.' : '';
  } 

  else if (id === 'message') {
    error.message = value.trim() === '' ? 'Please leave a message .' : '';
    }

    setErrors(error);

}
  
  const handleSubmit = (e) => {
    e.preventDefault();
    

    let error = {};
    let hasEmptyFields = false;
    Object.keys(formData).forEach((key) => {

    if (formData[key].trim() === '') {
    error[key] =` ${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
    hasEmptyFields = true;
    }

    });


    setErrors(error);
    if (hasEmptyFields) {
    console.log("Form has errors. Please fix them.");
    } else {
      axios.post('http://localhost:4000/contactUs', formData)
      .then(res => {
        console.log(res.data);
        console.log("Form submitted successfully");
        alert("message has sent");
  
      })
      .catch(err => {
        console.error(err.response.data);
      });

   
    }

  };


  return (
    <>
      
      <div className="card" id=" header">
        <img src={image}
          className="card-img" id="header-image" alt="" />
        <div className="card-img-overlay" id="card-img-overlay1">
          <h1 className="contact-us justify-content-center ">CONTACT US</h1>
        </div>
      </div>


       <div className="box" id="boxes">
       
        <form  id="contactForm"  onSubmit={handleSubmit}>

        <div className='mb-1'>
        <label for="Default input" className="form-label"id="form-labelll" >First Name</label>
        <input className="form-control" id="F_name" type="text" placeholder="first name" 
        aria-label="default input example"
      value={formData.F_name} onChange={handleChange}></input>

      <span className="error">{errors.F_name}</span>
      </div>

      <div className='mb-1'>
        <label for="Default input" className="form-label" id="form-labellll">Last Name</label>
        <input className="form-control" id="L_name" type="text" placeholder="last name" aria-label="default input example"
          value={formData.L_name}  onChange={handleChange} ></input>

       <span className="error">{errors.L_name}</span>
</div>

        <div class="mb-1">
          <label for="exampleFormControlInput1" className="form-label" id="form-labelllll">E-mail</label>
          <input type="email" className="form-control" id="E_mail" placeholder="name@example.com" 
            value={formData.E_mail}  onChange={handleChange} ></input>

           <span className="error">{errors.E_mail}</span>
        </div>

        <div className="mb-3" id="leave-message">
            <label for="exampleFormControlTextarea1" className="form-label " id="form-labellllll">LEAVE A MESSAGE FOR US</label>
            <textarea className="form-control " id="message" placeholder="" rows="7"
              value={formData. message} onChange={handleChange} ></textarea>

          
            <span className="error">{errors.message}</span>
      </div> 
      <button class="btn btn-primary" type="submit" id="contactussubmit" >SUBMIT</button>
      </form>

        </div>
         

    </>
  )
}

export default ContactUs