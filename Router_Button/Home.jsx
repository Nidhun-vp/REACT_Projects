// HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigation1 = () => {
    navigate('/about'); // Navigates to the AboutPage
  };
  const handleNavigation2 = () => {
    navigate('/Streak'); // Navigates to the AboutPage
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleNavigation1}>Go to About Page</button>
      <button onClick={handleNavigation2}>Go to Streak Page</button>
    </div>
  );
}

export default HomePage;
