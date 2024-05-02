import React, { useState, useEffect } from "react";
import "./BrandStyle.css";
import image from "../img/pink.png";
import image2 from "../img/Ellipse 1.png";
import exampleCarouselImage from "../img/blue.png";
import exampleCarouselImage2 from "../img/pink.png";
import exampleCarouselImage3 from "../img/yellow.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const BrandP = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [platform, setPlatform] = useState("");
  const [terms, setTerms] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (showModal) {
      const modalElement = document.getElementById("collaborationOfferModal");
      const bsModal = new window.bootstrap.Modal(modalElement);
      bsModal.show();

      const handleModalHidden = () => {
        setShowModal(false);
        setPlatform("");
        setTerms("");
        setStartDate("");
        setEndDate("");
        setPrice("");
      };

      modalElement.addEventListener("hidden.bs.modal", handleModalHidden);
      return () =>
        modalElement.removeEventListener("hidden.bs.modal", handleModalHidden);
    }
  }, [showModal]);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div>
      <div>
        <img src={image} className="img-fluid" alt="" />
        <img src={image2} className="img-thumbnail" alt="" />
        <div className="container">
          <div className="textbox">
            <h3>NAME</h3>
          </div>
        </div>
      </div>
      <div className="boxx">
        <div className="card" id="description">
          <div className="card-body">
            <label htmlFor="floatingInput">Description: </label>
            <p>
              oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
            </p>
          </div>
        </div>

        <div className="button-container">
          <div className="button-row">
            <button type="button" className="btn btn-danger" id="btn1">
              Add to favorites
            </button>
          </div>
          <div className="button-row">
            <button type="button" className="btn btn-danger" id="btn2">
              Message
            </button>
            <button
              type="button"
              className="btn btn-danger"
              id="btn3"
              onClick={() => setShowModal(true)}
            >
              Collab
            </button>
          </div>
        </div>
      </div>
      <hr />
      <h3 className="posts-title">Posts</h3>
      <br></br>
      <div className="card carousel-card">
        <div
          className="carousel slide"
          id="carouselExample"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}
            >
              <img
                src={exampleCarouselImage}
                className="d-block w-100"
                alt="First slide"
              />
            </div>
            <div
              className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}
            >
              <img
                src={exampleCarouselImage2}
                className="d-block w-100"
                alt="Second slide"
              />
            </div>
            <div
              className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}
            >
              <img
                src={exampleCarouselImage3}
                className="d-block w-100"
                alt="Third slide"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={() => handleSelect((activeIndex - 1 + 3) % 3)}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={() => handleSelect((activeIndex + 1) % 3)}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br></br>
      <hr />
      <h3 className="links-title">Links</h3>
      <br></br>
      <div className="social-buttons">
        <button className="btn btn-custom btn-instagram">
          <i className="bi bi-instagram"></i>
        </button>
        <button className="btn btn-custom btn-facebook">
          <i className="bi bi-facebook"></i>
        </button>
        <button className="btn btn-custom btn-tiktok">
          <i className="bi bi-tiktok"></i>
        </button>
        <button className="btn btn-custom btn-snapchat">
          <i className="bi bi-snapchat"></i>
        </button>
        <button className="btn btn-custom btn-youtube">
          <i className="bi bi-youtube"></i>
        </button>
        <button className="btn btn-custom btn-x">
          <i className="bi bi-twitter-x"></i>
        </button>
      </div>

      <div
        className="modal fade"
        id="collaborationOfferModal"
        tabIndex="-1"
        aria-labelledby="collaborationOfferModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="collaborationOfferModalLabel">
                Collaboration Offer
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="floatingSelectPlatform" className="form-label">
                  Choose a platform:
                </label>
                <select
                  className="form-select"
                  id="floatingSelectPlatform"
                  aria-label="Choose platform"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                >
                  <option value="">Choose</option>
                  <option value="1">Instagram</option>
                  <option value="2">Facebook</option>
                  <option value="3">TikTok</option>
                  <option value="4">Snapchat</option>
                  <option value="5">YouTube</option>
                  <option value="6">X</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="floatingTextareaTerms" className="form-label">
                  Terms:
                </label>
                <textarea
                  className="form-control"
                  id="floatingTextareaTerms"
                  style={{ height: "100px" }}
                  value={terms}
                  onChange={(e) => setTerms(e.target.value)}
                ></textarea>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="startFromDate" className="form-label">
                      Start from:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="startFromDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="toDate" className="form-label">
                      To:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="toDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="floatingSelectPrice" className="form-label">
                  Price:
                </label>
                <select
                  className="form-select"
                  id="floatingSelectPrice"
                  aria-label="Choose price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="">$</option>
                  <option value="1">Price One</option>
                  <option value="2">Price Two</option>
                  <option value="3">Price Three</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandP;
