import React, { useState } from 'react';
import './styles.css';

const HomePage = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]); // To hold filtered jobs
  const [noJobsMessage, setNoJobsMessage] = useState('');

  // Sample job listings
  const jobListings = [
    { title: 'Software Developer', location: 'Chennai', description: 'Develop and maintain software applications.' },
    { title: 'QA Engineer', location: 'Madurai', description: 'Ensure the quality of software products.' },
    { title: 'Data Scientist', location: 'Remote', description: 'Analyze data and create insights.' },
    { title: 'Intern - Software Engineering', location: 'Bangalore', description: 'Assist with software development tasks.' },
    { title: 'DevOps Engineer', location: 'Chennai', description: 'Manage infrastructure and deployments.' },
    { title: 'Product Tester', location: 'Kovai', description: 'Test products for quality assurance.' },
    { title: 'Software Engineer', location: 'Madurai', description: 'Design and implement software solutions.' },
  ];

  const handleSearch = () => {
    // Filter jobs based on jobTitle
    const filteredJobs = jobListings.filter(job =>
      job.title.toLowerCase().includes(jobTitle.toLowerCase())
    );

    if (filteredJobs.length > 0) {
      setJobs(filteredJobs);
      setNoJobsMessage('');
    } else {
      setJobs([]);
      setNoJobsMessage('No jobs found for your search criteria.');
    }
  };

  return (
    <div className="home-section">
      <div className="home-container">
        {/* Left half - Image */}
        <div className="image-container">
          <img
            src="https://sprinkdigital.com/blog/wp-content/uploads/2020/04/Digital-Marketing-Trends-2020.png"
            alt="Job Search"
            className="home-image"
          />
        </div>

        {/* Right half - Search content */}
        <div className="search-box">
          <h1 className="animated-title">Find Your Dream Job</h1>
          <p className="animated-description">
            Discover opportunities that match your skills and passions.
          </p>
          <div className="input-group">
            <textarea
              placeholder="Enter job title or keywords"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <textarea
              placeholder="Enter your location (city or postcode)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input-field"
            />
          </div>
          <button className="search-button" onClick={handleSearch}>
            Find Jobs
          </button>

          {/* Display job results or no jobs message */}
          <div className="job-results">
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <div key={index} className="job-card">
                  <h3>{job.title}</h3>
                  <p>{job.location}</p>
                  <p>{job.description}</p>
                </div>
              ))
            ) : (
              <p>{noJobsMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
