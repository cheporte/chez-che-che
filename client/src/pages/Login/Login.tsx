import React, { useState } from 'react';
import { useAuth } from '@context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

import '@styles/pages/authpage.sass';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/'); // Redirect to home on successful login
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      <p>Not a member yet? <Link to='/register'>Become One!</Link></p>
    </div>
  );
};

export default Login;
