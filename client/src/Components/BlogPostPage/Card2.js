import React from 'react';
import './Card2.css';

export default function Card({ content }) {
  return (
    <div className="blogPostCard">
      <p>{content}</p>
    </div>
  );
}
