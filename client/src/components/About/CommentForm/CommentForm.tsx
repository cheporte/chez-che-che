import React, { useState, useEffect } from 'react';
import './CommentForm.sass';
import RestaurantButton from '@components/RestaurantButton';
import Comment from '@components/Comment';

import { addComment, fetchComments } from '@services/comments';

type CommentType = {
  name: string;
  message: string;
  date: string;
  rating?: number;
};

const CommentForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    const loadComments = async () => {
      const fetchedComments = await fetchComments();
      setComments(fetchedComments);
    };

    loadComments();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || rating === null) return;

    const newComment = {
      name,
      message,
      date: new Date().toLocaleDateString(),
      rating,
    };

    await addComment(newComment);
    setComments([newComment, ...comments]);
    setName('');
    setMessage('');
    setRating(null);
  };

  return (
    <section className="comment-section">
      <h2>Leave Us a Comment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Comment"
          rows={5}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />

        <div className="rating-select">
          {[1, 2, 3, 4, 5].map(star => (
            <span
              key={star}
              className={`star ${rating && rating >= star ? 'selected' : ''}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <RestaurantButton type="submit">Submit</RestaurantButton>
      </form>

      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index}>
            <Comment name={comment.name} text={comment.message} rating={comment.rating} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommentForm;
