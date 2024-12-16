// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import JobsPage from './components/JobsPage';
import ServicesPage from './components/ServicesPage';
import PostJobPage from './components/PostJobPage';
import LoginPage from './components/LoginPage'; // Import LoginPage
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      {/* Render Navbar and Footer only if not on the LoginPage */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/jobs"
          element={
            <>
              <Navbar />
              <JobsPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <ServicesPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/post-job"
          element={
            <>
              <Navbar />
              <PostJobPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
