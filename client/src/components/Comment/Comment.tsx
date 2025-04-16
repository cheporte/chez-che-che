// src/components/Comment/Comment.tsx
import React from 'react';
import './Comment.sass';

type CommentProps = {
  name: string;
  text: string;
  rating?: number;
};

const Comment: React.FC<CommentProps> = ({ name, text, rating }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <strong>{name}</strong>
        {rating !== undefined && (
          <div className="comment-rating">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </div>
        )}
      </div>
      <p className="comment-text">{text}</p>
    </div>
  );
};

export default Comment;
