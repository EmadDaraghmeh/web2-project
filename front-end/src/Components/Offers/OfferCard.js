import React from 'react';
import '../Offers.css';
import restaurantImage from '../img/Screenshot 2024-04-26 191047.png';

function OfferCard() {
  return (
    
    <div className="card">
      <div className="card-body">
        <div className="top-section">
          <img src={restaurantImage} alt="Burger House" className="card-image" />
          <div className="card-title-text">
            <h5 className="card-title">Burger house</h5>
            <p className="card-text">restaurant</p>
          </div>
        </div>
        <div className="button-group">
          <a href="#" className="btn btn-primary" >view profile</a>
          <a href="#" className="btn btn-primary">view offer</a>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;

