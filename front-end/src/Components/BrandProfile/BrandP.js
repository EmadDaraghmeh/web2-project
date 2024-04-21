import React, { useState, useEffect } from "react";
import "./BrandStyle.css";

const BrandP = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      const modalElement = document.getElementById("collaborationOfferModal");
      const bsModal = new window.bootstrap.Modal(modalElement);
      bsModal.show();

      const handleModalHidden = () => setShowModal(false);

      modalElement.addEventListener("hidden.bs.modal", handleModalHidden);

      return () =>
        modalElement.removeEventListener("hidden.bs.modal", handleModalHidden);
    }
  }, [showModal]);

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Show Collaboration Offer
      </button>

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
                >
                  <option value="" disabled selected>
                    Choose
                  </option>
                  <option value="1">Instagram</option>
                  <option value="2">Facebook</option>
                  <option value="3">TikTok</option>
                  <option value="4">Snapchat</option>
                  <option value="5">Youtube</option>
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
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="toDate" className="form-label">
                      To:
                    </label>
                    <input type="date" className="form-control" id="toDate" />
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
                >
                  <option value="" disabled selected>
                    $
                  </option>
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
    </>
  );
};

export default BrandP;
