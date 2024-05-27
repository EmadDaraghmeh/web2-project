import React from 'react';
import './Card.css';

const Card = ({ subject, content, date, image, readMore }) => {
  return (
    <div className="card">
        <div className="card-image">
        <img src={image} alt="Blog" />
      </div>
      <div className="card-content">
        <div className="card-title">{subject}</div>
        <div className="card-text">{content}</div>
        </div>
        
       
      <div className="card-footer">
            
          <span className="card-date">{date}</span>
          <button className="card-button" onClick={readMore}>
            Read more
          </button>
        </div>
      
        {/* <div className="card-image">
        <img src={image} alt="Blog" />
      </div> */}
    </div>
  );
};

export default Card;
