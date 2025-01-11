import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate('/'); // Navigate back to Home page
  };

  return (
    <div>
      <h1>Welcome to the Streak Page</h1>
      <button onClick={goBackToHome}>Back to Home</button>
    </div>
  );
}

export default AboutPage;

