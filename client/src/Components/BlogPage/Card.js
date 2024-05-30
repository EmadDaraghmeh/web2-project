// import React from 'react';
// import { Link } from "react-router-dom";

// import './Card.css';

// const Card = ({ subject, content, date, image, readMore }) => {
//   return (
//     <div className="card-blog">
//         <div className="card-image-blog">
//         <img src={image} alt="Blog" />
//       </div>
//       <div className="card-content">
//         <div className="card-title-blog">{subject}</div>
//         <div className="card-text-blog">{content}</div>
//         </div>
        
       
//       <div className="card-footer-blog">
            
//           <span className="card-date-blog">{date}</span>
//           <Link className="read-more-link" to="/BlogPost">
//           <button className="card-button-blog"  onClick={readMore}>
//             Read more
//           </button>
//           </Link>
//         </div>
    
//     </div>
//   );
// };

// export default Card;
import React from 'react';
import './Card.css';

const Card = ({ subject, content, date, image, readMore }) => {
  return (
    <div className="card-blog">
        <div className="card-image-blog">
        <img src={image} alt="Blog" />
      </div>
      <div className="card-content-blog">
        <div className="card-titleblog">{subject}</div>
        <div className="card-textblog">{content}</div>
        </div>
        
       
      <div className="card-footer-blog">
            
          <span className="card-date-blog">{date}</span>
          <button className="card-button-blog" onClick={readMore}>
            Read more
          </button>
        </div>
    
    </div>
  );
};

export default Card;
