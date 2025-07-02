// src/App.jsx
import React, { useState, useEffect } from 'react';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  // isLoggedIn state determines which page to show
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Effect to check if user was "logged in" from previous session (using localStorage)
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []); // Empty dependency array means this runs once on component mount

  // Function to call when login is successful
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Simulate saving login state
  };

  // Function to call when user logs out
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Clear login state
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        // If logged in, show the DashboardPage
        <DashboardPage onLogout={handleLogout} />
      ) : (
        // If not logged in, show the AuthPage
        <AuthPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;