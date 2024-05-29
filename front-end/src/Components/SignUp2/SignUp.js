import React, { useState } from "react";
import "./SignUp2.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [inputLabel, setInputLabel] = useState("Website URL");
  const [inputValue, setInputValue] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [linkSaved, setLinkSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleInputLabelChange = (platform) => {
    setInputLabel(`Enter your ${platform} account link`);
    setInputValue("");
    setSelectedPlatform(platform.toLowerCase());
    setErrorMessage("");
  };

  const handleSaveLink = async () => {
    if (inputValue === "") {
      setErrorMessage("Please enter a link.");
      return;
    }

    try {
      const response = await axios.patch(`http://localhost:4000/link/${id}`, {
        platform: selectedPlatform,
        link: inputValue,
      });
      setLinkSaved(true);
      alert("Your account link has been saved");
      setInputValue("");
    } catch (error) {
      console.error("Error saving the link", error);
      alert("There was an error saving your link. Please try again.");
    }
  };

  const handleProfile = () => {
    if (!linkSaved) {
      setErrorMessage("Enter a link for one platform at least");
      return;
    }
    navigate("/InfluencerHome");
  };

  return (
    <div className="container text-center mt-5" style={{ width: "20cm" }}>
      <h2>Add a social network for influencer</h2>
      <br></br>
      <h5 className="mt-3">1. Choose your platform</h5>
      <div className="row justify-content-center mt-3">
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-custom btn-instagram"
            id="instagram-b"
            onClick={() => handleInputLabelChange("Instagram")}
          >
            <i className="bi bi-instagram"></i>
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-custom btn-facebook"
            id="facebook-b"
            onClick={() => handleInputLabelChange("Facebook")}
          >
            <i className="bi bi-facebook"></i>
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-custom btn-tiktok"
            id="tiktok-b"
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
            id="x-b"
            onClick={() => handleInputLabelChange("X")}
          >
            <i className="bi bi-twitter-x"></i>
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-custom btn-youtube"
            id="youtube-b"
            onClick={() => handleInputLabelChange("YouTube")}
          >
            <i className="bi bi-youtube"></i>
          </button>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary btn-custom btn-snapchat"
            id="snapchat-b"
            onClick={() => handleInputLabelChange("Snapchat")}
          >
            <i className="bi bi-snapchat"></i>
          </button>
        </div>
      </div>
      <h5 className="mt-4">2. Select account</h5>
      <div className="form-floating justify-content-center mb-3">
        <input
          type="url"
          className="form-control"
          id="floatingInput"
          placeholder="https://example.com"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label htmlFor="floatingInput">{inputLabel}</label>
        {errorMessage && (
          <div className="text-danger mt-2" style={{ fontSize: "0.9rem" }}>
            {errorMessage}
          </div>
        )}
      </div>
      <div className="row justify-content-between mt-4">
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary"
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
            onClick={handleProfile}
          >
            Confirm
          </button>
          <Link to="/InfluencerHome" />
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
            onClick={handleSaveLink}
          >
            Save Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
