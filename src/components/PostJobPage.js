import React, { useState } from 'react';
import './styles.css';

const PostJobPage = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePostJob = () => {
    // Logic for posting the job goes here
    // For now, we just display a success message
    setSuccessMessage('Job posted successfully!');

    // Clear input fields after posting
    setJobTitle('');
    setLocation('');
    setJobRole('');
    setJobDescription('');
  };

  return (
    <div className="post-job-section">
      <h2>Post a Job</h2>
      <div className="post-job-form">
        <input 
          type="text" 
          placeholder="Job Title" 
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="post-job-input"
        />
        <input 
          type="text" 
          placeholder="Location" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="post-job-input"
        />
        <input 
          type="text" 
          placeholder="Job Role" 
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="post-job-input"
        />
        <textarea 
          placeholder="Job Description" 
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="post-job-textarea"
        />
        <button className="post-job-button" onClick={handlePostJob}>Post Job</button>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default PostJobPage;
