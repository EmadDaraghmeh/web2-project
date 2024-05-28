import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './InfluencerProfilePage.css';
import image from './photo-1486312338219-ce68d2c6f44d.avif';
 import { useParams } from 'react-router-dom';


const InfluenceProfilePage = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/influencerprofilepage/${id}`)
      .then(res => {
        {console.log(res.data)}
        setData([res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);




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
          influencerId: "605c72ef5947c544d2f7cdbb",
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


        <div >
          <img src={image} className="img-fluid" id="img-fluid1" alt="" />
          <div className="container">
            <img src={image} className="img-thumbnail" id="img-thumbnail2" alt="" />
            <h3 className="username">{data.userName}</h3>
            <div className="boxx">
              <div className="card" id="description">
                <div className="card-body">
                  <label htmlFor="floatingInput" id="labell">Description: </label>
                  <p id="p">{data.description}</p>
                </div>
              </div>
              <div className="col-md-2">
                <button type="button" className="btn btn-danger" id="btn1">Add to favorites</button>
              </div>
              <div className="col-md-2">
                <button type="button" className="btn btn-danger" id="btn3">Message</button>
                <button type="button" className="btn btn-danger" id="btn4"  
              onClick={() => setShowModal(true)}>Collab</button>
              </div>
            </div>
            <hr />
            <h2 className="posts">Posts</h2>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={image} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={image} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={image} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <hr />
            <h2 className="posts">Social Media Links</h2>
            <div className="row justify-content-start mt-3">
              <div className="col-auto">
                <button className="btn btn-primary btn-custom btn-instagram">
                  <i className="bi bi-instagram" id="social"></i>
                  <a href={data.instagramLink} target="_blank" rel="noopener noreferrer"></a>
                </button>
              </div>
              <div className="col-auto">
                <button className="btn btn-primary btn-custom btn-facebook">
                  <i className="bi bi-facebook" id="social"></i>
                  <a href={data.facebookLink} target="_blank" rel="noopener noreferrer"></a>
                </button>
              </div>
              <div className="col-auto">
                <button className="btn btn-primary btn-custom btn-tiktok">
                  <i className="bi bi-tiktok" id="social"></i>
                  <a href={data.tiktokLink} target="_blank" rel="noopener noreferrer"></a>
                </button>
              </div>
              <div className="col-auto">
                <button className="btn btn-primary btn-custom btn-snapchat">
                  <i className="bi bi-snapchat" id="social"></i>
                  <a href={data.snapchatLink} target="_blank" rel="noopener noreferrer"></a>
                </button>
              </div>
              <div className="col-auto">
                <button className="btn btn-primary btn-custom btn-youtube">
                  <i className="bi bi-youtube" id="social"></i>
                  <a href={data.youtubeLink} target="_blank" rel="noopener noreferrer"></a>
                </button>
              </div>
              <div className="col-auto">
                <button className="btn btn-primary btn-custom btn-twitter">
                  <i className="bi bi-twitter" id="social"></i>
                  <a href={data.twitterLink} target="_blank" rel="noopener noreferrer"></a>
                </button>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default InfluenceProfilePage;
