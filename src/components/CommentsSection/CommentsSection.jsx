import React from 'react';

import './CommentsSection.css';
import RatingBar from '../RatingBar/RatingBar';
import Comment from '../Comment/Comment';

const CommentsSection = () => {
  return (
    <div className="comments-section">
      <h2>Comments</h2>
      <div className="rating-summary">
        <div className="rating-score">
          <span className="score">4.0</span>
          <div className="stars">
            ⭐⭐⭐⭐☆
          </div>
          <div className="rating-count">based on 146,951 ratings</div>
        </div>
        <div className="rating-bars">
          <RatingBar stars="5" percentage={90} />
          <RatingBar stars="4" percentage={5} />
          <RatingBar stars="3" percentage={2} />
          <RatingBar stars="2" percentage={2} />
          <RatingBar stars="1" percentage={1} />
        </div>
      </div>
      <div className="comments">
        <Comment 
          name="Laura Hipster" 
          date="October 03, 2022" 
          text="Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel."
        />
        <Comment 
          name="Laura Hipster" 
          date="October 03, 2022" 
          text="Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel."
        />
        <Comment 
          name="Laura Hipster" 
          date="October 03, 2022" 
          text="Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel."
        />
      </div>
    </div>
  );
};

export default CommentsSection;