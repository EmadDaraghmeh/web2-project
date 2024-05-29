import React, { useState, useEffect } from "react";
import "./BrandStyle.css";
import image2 from "../Image/image2.jpg";
import exampleCarouselImage from "../Image/blue.png";
import exampleCarouselImage2 from "../Image/pink.png";
import exampleCarouselImage3 from "../Image/yellow.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from "react-router-dom";

const BrandP = () => {
  const [showModal, setShowModal] = useState(false);
  const [brand, setBrand] = useState({});
  const [platform, setPlatform] = useState("");
  const [terms, setTerms] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const { id, influencerId } = useParams();

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await fetch(`http://localhost:4000/bprofile/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch brand data");
        }
        const data = await response.json();
        setBrand(data);
        console.log("Fetched brand data:", data);
      } catch (error) {
        console.error("Error fetching brand data:", error);
      }
    };

    if (id) {
      fetchBrand();
    }
  }, [id]);

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

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/collab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          terms,
          platform,
          date: new Date().toISOString(),
          startDate,
          endDate,
          price,
          influencerId:"605c72ef5947c544d2f7cdbb",
          brandId: id,
          state: "pending",
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Collaboration created:", data);
      alert("Offer sent successfully");
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting collaboration offer:", error);
    }
  };

  return (
    <div>
      <div>
        <img src={brand.cover || ""} id="thumbnail1" alt="" />
        <img src={brand.picture || image2} id="thumbnail2" alt="" />
        <div className="textbox">
          <h3>{brand.userName || "NAME"}</h3>
        </div>
      </div>
      <div className="boxxx">
        <div className="card" id="description">
          <div className="card-body">
            <label htmlFor="floatingInput">Description: </label>
            <p>{brand.description || ""}</p>
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
      <div className="container">
        <hr />
        <h3 className="posts-title">Posts</h3>
        <br></br>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={exampleCarouselImage}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={exampleCarouselImage2}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={exampleCarouselImage3}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
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
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br></br>
        <hr />
        <h3 className="links-title">Social Media</h3>
        <br></br>
        <div className="social-buttons" id="social-b">
          <button className="btn btn-custom btn-instagram" id="b-instagram">
            <i className="bi bi-instagram"></i>
          </button>
          <button className="btn btn-custom btn-facebook" id="b-facebook">
            <i className="bi bi-facebook"></i>
          </button>
          <button className="btn btn-custom btn-tiktok" id="b-tiktok">
            <i className="bi bi-tiktok"></i>
          </button>
          <button className="btn btn-custom btn-snapchat" id="b-snapchat">
            <i className="bi bi-snapchat"></i>
          </button>
          <button className="btn btn-custom btn-youtube" id="b-youtube">
            <i className="bi bi-youtube"></i>
          </button>
          <button className="btn btn-custom btn-x" id="b-x">
            <i className="bi bi-twitter-x"></i>
          </button>
        </div>
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
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Snapchat">Snapchat</option>
                  <option value="YouTube">YouTube</option>
                  <option value="X">X</option>
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
                <label htmlFor="floatingInputPrice" className="form-label">
                  Price:
                </label>
                <div className="form-floating">
                  <input
                    name="Price"
                    type="text"
                    className="form-control"
                    id="floatingInputPrice"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <label htmlFor="floatingInputPrice">Enter price</label>
                </div>
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
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
