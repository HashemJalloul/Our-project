import React from 'react';
import './Comment.css';

const Comment = ({ name, date, text }) => {
  return (
    <div className="comment">
      
      <img src="/imges/girl.png" alt="avatar" className="avatar" />
      <div className="comment-body">
        <div className="comment-header">
          <span className="name">{name}</span>
          <span className="date">{date}</span>
        </div>
        <p>{text}</p>
        <span className="reply">Reply</span>
      </div>
    </div>
  );
};

export default Comment;