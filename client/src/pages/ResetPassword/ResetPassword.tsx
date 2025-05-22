import React, { useState } from 'react';
import { resetPassword } from '../../firebase/authService';
import { Link } from 'react-router-dom';

import "@styles/pages/resetPassword.sass";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setMessage('Reset email sent! ✨ Check your inbox.');
      setError('');
    } catch (err) {
      setError('Hmm... that didn’t work. Is your email correct? 🧐');
      setMessage('');
    }
  };

  return (
    <div className="reset-page">
      <div className="reset-page__container">
        <h2>Forgot Your Password?</h2>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
        <p><Link to="/login">Back to Login</Link></p>
      </div>
    </div>
  );
};

export default ResetPassword;
