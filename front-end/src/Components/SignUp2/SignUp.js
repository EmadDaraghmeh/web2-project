import React, { useState } from "react";
import "./SignUp2.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SignUp = () => {
  const [inputLabel, setInputLabel] = useState("Website URL");

  const handleInputLabelChange = (platform) => {
    setInputLabel(`Enter your ${platform} account`);
  };

  return (
    <div className="container  text-center mt-5" style={{ width: "20cm" }}>
      <h2>Add a social network for influencer</h2>
      <br></br>
      <h5 className="mt-3">1. Choose your platform</h5>
      <div className="row justify-content-center mt-3">
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-custom btn-instagram"
            onClick={() => handleInputLabelChange("Instagram")}
          >
            <i className="bi bi-instagram"></i>
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-custom btn-facebook"
            onClick={() => handleInputLabelChange("Facebook")}
          >
            <i className="bi bi-facebook"></i>
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-custom btn-tiktok"
            onClick={() => handleInputLabelChange("TikTok")}
          >
            <i className="bi bi-tiktok"></i>
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-custom btn-x"
            onClick={() => handleInputLabelChange("X")}
          >
            <i className="bi bi-twitter-x"></i>{" "}
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-custom btn-youtube"
            onClick={() => handleInputLabelChange("YouTube")}
          >
            <i className="bi bi-youtube"></i>
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-custom btn-snapchat"
            onClick={() => handleInputLabelChange("Snapchat")}
          >
            <i className="bi bi-snapchat"></i>
          </button>
        </div>
      </div>
      <h5 className="mt-4">2. Select account</h5>
      <div className=" form-floating justify-content-center   mb-3">
        <input
          type="url"
          className="form-control"
          id="floatingInput"
          placeholder="https://example.com"
        />
        <label htmlFor="floatingInput">{inputLabel}</label>
      </div>
      <div className="row  justify-content-between mt-4">
        <div className="col-auto">
          <button
            type="button"
            className="btn  btn-primary "
            style={{
              marginLeft: "36px",
              backgroundColor: "#ff1b6d",
              borderColor: "#ff1b6d",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#ff1b6d";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#ff1b6d";
              e.currentTarget.style.color = "#fff";
            }}
          >
            Next<i class="bi bi-caret-right-fill ml-5"></i>
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              marginRight: "30px",
              backgroundColor: "#ff1b6d",
              borderColor: "#ff1b6d",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#ff1b6d";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#ff1b6d";
              e.currentTarget.style.color = "#fff";
            }}
          >
            Authorize
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
