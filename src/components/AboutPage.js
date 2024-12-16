import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div className="about-content-box">
        <h2 className="about-title">About CareerConnect</h2>
        <p className="about-text">
          Welcome to CareerConnect, your premier online job portal dedicated to helping job seekers
          find the perfect opportunity and employers connect with top talent. We understand that the
          job search process can be overwhelming, and our mission is to streamline it for you.
        </p>
        <p className="about-text">
          At CareerConnect, we believe in the power of connections. Our platform is designed to
          provide a seamless experience for both job seekers and employers. We offer a wide range
          of features, including personalized job recommendations, advanced search filters, and
          easy application processes.Our team is committed to curating the best job listings across various industries and
          locations, ensuring you have access to the latest opportunities.
        </p>
        
        <p className="about-text">
          Join us at CareerConnect, where your career journey begins. Whether you're searching for
          your dream job or looking to hire top talent, we are here to support you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
