import React from 'react';
import '@styles/pages/loading.sass';

const LoadingPage: React.FC = () => {
  return (
    <div className="loading-page">
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
      </div>
      <p className="loading-text">Please wait...</p>
    </div>
  );
};

export default LoadingPage;
