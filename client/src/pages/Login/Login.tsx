import React, { useState } from 'react';
import { useAuth } from '@context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

import '@styles/pages/authpage.sass';

const Login: React.FC = () => {
  const { login, loginWithGoogle } = useAuth();
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

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (err) {
      setError('Google login failed. Maybe try again?');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-page__container">
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

          <button className="google-login" onClick={handleGoogleLogin}>
            Sign in with Google 🌈
          </button>
        </form>
        <p>Not a member yet? <Link to='/register'>Become One!</Link></p>
        <p><Link to="/reset-password">Forgot password?</Link></p>
      </div>
    </div>
  );
};

export default Login;
