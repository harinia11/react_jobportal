import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LoginPage.css'; // Optional: Create a CSS file for styles

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Error message state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demonstration
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    // Check if the entered email and password match the hardcoded values
    if (email === validEmail && password === validPassword) {
      // If login is successful
      navigate('/home'); // Navigate to the home page
    } else {
      // If login fails, show an error message
      setErrorMessage('Invalid email or password. Please try again.');
    }

    // Clear the fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="left-side">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <div className="right-side">
          <h2 className="glitter-effect">Welcome to CareerConnect</h2>
          <p>Connecting you to your dream job.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
