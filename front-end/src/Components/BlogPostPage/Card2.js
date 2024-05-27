import React from 'react';
import './Card2.css';

export default function Card({ content }) {
  return (
    <div className="card">
      <p>{content}</p>
    </div>
  );
}
