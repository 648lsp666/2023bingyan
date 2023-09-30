import React from 'react';
import './Challenge.css';

function Challenge({ title, image, description }) {
  return (
    <div className="challenge">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Challenge;
