import React, { useState } from 'react';
import { useAuth } from '@context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

import '@styles/pages/authpage.sass';

const Register: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate('/chez-che-che'); // Redirect to home on successful registration
    } catch (err) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="auth-page">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>Already a member? <Link to='/chez-che-che/login'>Welcome Back!</Link></p>
    </div>
  );
};

export default Register;
