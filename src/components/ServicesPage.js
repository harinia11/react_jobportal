import React, { useState } from 'react';
import './styles.css';

const ServicesPage = () => {
  const [visibleDetail, setVisibleDetail] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Boost Prep',
      content: 'Get noticed by recruiters with our Boost Prep service, which features your profile prominently to employers.',
      price: 799,
      image: 'https://thumbs.dreamstime.com/b/boost-up-concept-mental-growth-improvement-career-promote-to-higher-position-motivational-power-efficiency-capability-251736093.jpg', // Replace with your image URL
    },
    {
      id: 2,
      title: 'Profile Highlighter',
      content: 'Enhance your profile visibility with our Profile Highlighter service. Make a lasting impression with employers.',
      price: 599,
      image: 'https://www.globalsign.com/application/files/2516/9839/2119/5_must_ask_question_mian_3.webp', // Replace with your image URL
    },
    {
      id: 3,
      title: 'Mock Interview',
      content: 'Prepare for real interviews with our Mock Interview service. Receive constructive feedback to improve your performance.',
      price: 2799,
      image: 'https://static.vecteezy.com/system/resources/previews/002/779/403/large_2x/job-interview-conversation-hr-manager-and-job-candidate-meeting-for-interview-illustration-flat-vector.jpg', // Replace with your image URL
    },
    {
      id: 4,
      title: 'Interview Preparation',
      content: 'Get expert guidance and resources to prepare for your interviews effectively.',
      price: 999,
      image: 'https://img.freepik.com/premium-vector/people-work-from-home-trending-concept-flat-illustration_720185-504.jpg', // Replace with your image URL
    },
  ];

  const toggleDetail = (id) => {
    setVisibleDetail(visibleDetail === id ? null : id);
  };

  return (
    <div className="services-section">
      <h2>Our Services</h2>
      
      <div className="service-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" /> {/* Add image here */}
            <h3>{service.title}</h3>
            <button onClick={() => toggleDetail(service.id)}>View Details</button>

            {visibleDetail === service.id && (
              <div className="service-details">
                <p>{service.content}</p>
                <p>Price: ₹{service.price}</p>
                <button onClick={() => toggleDetail(null)}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
