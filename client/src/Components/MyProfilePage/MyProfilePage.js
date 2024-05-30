import './MyProfilePage.css';
import image from "./photo-1486312338219-ce68d2c6f44d.avif";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MyProfilePage = () => {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null); 
  const [uploadType, setUploadType] = useState(""); 
  
  const [data,setData]=useState({});
  
  useEffect(() => {
    axios.get(`http://localhost:4000/influencerprofilepage/${id}`)
      .then(res => {
        {console.log(res.data)}
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);
  
  useEffect(() => {
    if (showModal) {
      const modalElement = document.getElementById("editModal");
      const bsModal = new window.bootstrap.Modal(modalElement);
      bsModal.show();

      const handleModalHidden = () => {
        setShowModal(false);
        setFile(null);
        setUploadType("");
      };

      modalElement.addEventListener("hidden.bs.modal", handleModalHidden);
      return () =>
        modalElement.removeEventListener("hidden.bs.modal", handleModalHidden);
    }
  }, [showModal]);

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', uploadType); 

    try {
      const response = await fetch(`http://localhost:4000/signupinfluencer/${id}`, {
        method: "PATCH",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Data uploaded:", data);
      alert("Upload successful!");
      setShowModal(false);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };






  
  return (
    <>
      <img src={image} className="img-fluid" id="img-fluid1" alt="" />
    
      <div className="container">
        <img src={image} className="img-thumbnail" id="img-thumbnail2" alt="" />
        <h3 className="username">{data.userName}</h3>

        <div className="boxx">
          <div className="card" id="description">
            <div className="card-body">
              <label htmlFor="floatingInput" id="labell">Description: </label>
              <p id="p">  {data.description}</p>
            </div>
          </div>

          <div className="buttons">
            <button 
              type="button" 
              className="btn btn-danger" 
              onClick={() => {
                setShowModal(true);
                setUploadType("picture");
              }} 
              id="btnpicture"
            >
              Edit Picture
            </button>
            <button 
              type="button" 
              className="btn btn-danger" 
              onClick={() => {
                setShowModal(true);
                setUploadType("cover");
              }} 
              id="btncover"
            >
              Edit Cover
            </button>
          </div>

          <div
            className="modal fade"
            id="editModal"
            tabIndex="-1"
            aria-labelledby="editModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="editModalLabel">
                    Upload {uploadType}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input 
                        type="file" 
                        className="custom-file-input" 
                        id="inputGroupFile02" 
                        onChange={(e) => setFile(e.target.files[0])} 
                      />
                      
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
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <h2 className="posts">Posts</h2>

        <button 
              type="button" 
              className="btn btn-danger" 
              onClick={() => {
                setShowModal(true);
                setUploadType("posts");
              }} 
              id="btnpost"
            >
              Add Posts
            </button>

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
      </div>
    </>
  );
};

export default MyProfilePage;
