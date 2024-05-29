import React, { useState, useEffect } from "react";
import "./AccountSettings.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams,useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const AccountSettings = () => {
    const { userId } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [currentLink, setCurrentLink] = useState({ name: "", url: "" });
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        phoneNumber: "",
        industry: "",
        country: "",
        city: "",
        description: "",
        price: 0
    });
    const [socialMediaLinks, setSocialMediaLinks] = useState({
        instagram: "",
        facebook: "",
        tiktok: "",
        twitter: "",
        youtube: "",
        snapchat: "",
    });

    useEffect(() => {
        axios.get(`http://localhost:4000/get-user/${userId}`)
            .then((res) => {
                setUserData(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, [userId]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    const handleSaveChanges = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.patch(`http://localhost:4000/update-user/${userId}`, userData);
            alert(response.data);
        } catch (error) {
            console.error("Error details:", error.response ? error.response.data : error.message);
            alert('Failed to save changes');
        }
    };

    const openModal = (socialMedia) => {
        setCurrentLink({ name: socialMedia, url: socialMediaLinks[socialMedia] || "" });
        setShowModal(true);
    };

    const handleLinkChange = (e) => {
        setCurrentLink({ ...currentLink, url: e.target.value });
    };

    const handleAuthorize = () => {
        if (currentLink.url.startsWith("https://")) {
            console.log("Link authorized:", currentLink.url);
            alert('Link is valid and authorized.');
        } else {
            alert('Link is invalid, please enter a valid URL.');
        }
    };

    const saveLink = async () => {
        console.log('Saving social media link...', currentLink);
        try {
            const updatedLinks = { ...socialMediaLinks, [currentLink.name]: currentLink.url };
            setSocialMediaLinks(updatedLinks);
            setShowModal(false);

            const response = await axios.patch(`http://localhost:4000/update-social-link/${userId}`, {
                socialMedia: currentLink.name,
                url: currentLink.url
            });
            console.log('Save link response:', response.data);
            alert(response.data.message);
        } catch (error) {
            console.error("Failed to update social link:", error);
            alert('Failed to update link: ' + (error.response && error.response.data.message ? error.response.data.message : 'No response from server'));
        }
    };

    const renderSocialMediaButtons = () => {
        return Object.keys(socialMediaLinks).map((socialMedia, index) => (
            <div key={index} className="col-4 position-relative">
                <div className="btn-container">
                    <button
                        type="button"
                        className={`btn btn-primary btn-custom btn-${socialMedia}`}
                        onClick={() => openModal(socialMedia)}
                    >
                        <i className={`bi bi-${socialMedia}`}></i>
                    </button>
                </div>
            </div>
        ));
    };

    const navigate = useNavigate();
    const handleCancel = () => {
        navigate("/AccSettingPass");
        console.log("Cancel button clicked");
    };
    const handleDeleteButton = () => {
        navigate("/DeleteAccount");
        console.log("Delete button clicked");
    };

    return (
        <div className="account-settings">
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Social Media Link</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className="form-control"
                        value={currentLink.url}
                        onChange={handleLinkChange}
                        placeholder="Enter social media link..."
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveLink}>
                        Save Changes
                    </Button>
                    <Button variant="success" onClick={handleAuthorize}>
                        Authorize
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="container " style={{
                                width: "auto",
                                borderRadius: "20px",
                            }}>
                <h2>Account Settings</h2>
                <h6>Change your profile and account settings</h6>
                <div className="row">
                    <div className="col-lg-3 col-md-5 col-sm-12">
                        <div
                            className="card custom-card mb-3"
                            style={{
                                width: "auto",
                                borderColor: "#ca3667",
                                borderRadius: "20px",
                            }}
                        >
                            <div className="card-body">
                                <button className="btn custom-button mb-2">
                                    <i className="bi bi-person-circle"></i>
                                    Account
                                </button>
                                <button
                                    className="btn custom-button mb-2"
                                    onClick={handleCancel}
                                >
                                    <i className="bi bi-file-lock2"></i>
                                    Password
                                </button>

                                <button
                                    onClick={handleDeleteButton}
                                    className="btn custom-button mb-2"
                                >
                                    <i className="bi bi-trash"></i>
                                    Delete account
                                </button>

                                <button
                                    className="btn custom-button"
                                    style={{ color: "rgb(255, 34, 119)" }}
                                >
                                    <i
                                        className="bi bi-box-arrow-in-left"
                                        style={{ color: "black" }}
                                    ></i>
                                    Sign out
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-7 col-sm-12">
                        <div
                            className="custom container p-4"
                            style={{ height: "auto", backgroundColor: "#ffffff" }}
                        >
                            <form onSubmit={handleSaveChanges}>
                                <div className="row ">
                                    <div className="col-md-6">
                                        User Name
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="userName"
                                            value={userData.userName}
                                            onChange={handleInputChange}
                                            placeholder="User Name.."
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        Email
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={userData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email.."
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        Phone Number
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phoneNumber"
                                            value={userData.phoneNumber}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number.."
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        Industry
                                        <select
                                            className="form-select mt-1"
                                            name="industry"
                                            value={userData.industry}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Industry</option>
                                            <option value="Beauty">Beauty</option>
                                            <option value="Fashion">Fashion</option>
                                            <option value="Sports">Sports</option>
                                            <option value="Technology">Technology</option>
                                            <option value="Healthcare">Healthcare</option>
                                            <option value="Food">Food</option>
                                            <option value="Entertainment">Entertainment</option>
                                            <option value="Travel">Travel</option>
                                            <option value="Education">Education</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        Country
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="country"
                                            value={userData.country}
                                            onChange={handleInputChange}
                                            placeholder="Country.."
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        City
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="city"
                                            value={userData.city}
                                            onChange={handleInputChange}
                                            placeholder="City.."
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        Price
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="price"
                                            value={userData.price}
                                            onChange={handleInputChange}
                                            placeholder="Price.."
                                        />
                                    </div>
                                    <div className="col-12">
                                        Description/Bio
                                        <textarea
                                            className="form-control"
                                            name="description"
                                            value={userData.description}
                                            onChange={handleInputChange}
                                            style={{ height: "2cm" }}
                                            placeholder="Description/Bio"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="container text-center 
                                " style={{ backgroundColor: "#ffffff" ,marginTop:"-20px"}}>
                                    <h2> Social Media</h2>
                                    <div className="row justify-content-center">
                                        {renderSocialMediaButtons()}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end  ">
                                    <button type="submit" className="btn btn-danger">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
