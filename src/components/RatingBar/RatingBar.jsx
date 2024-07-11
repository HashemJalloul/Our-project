import React from 'react';
import './RatingBar.css';

const RatingBar = ({ stars, percentage }) => {
  return (
    <div className="rating-bar">
      <span>{stars} stars</span>
      <div className="bar">
        <div className="filled" style={{ width: `${percentage}%` }}></div>
      </div>
      <span>{percentage}%</span>
    </div>
  );
};

export default RatingBar;