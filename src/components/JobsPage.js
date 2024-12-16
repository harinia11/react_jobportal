import React, { useState } from 'react';
import './styles.css';

const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWorkModes, setSelectedWorkModes] = useState({
    internship: false,
    partTime: false,
    fullTime: false,
  });

  // Array of featured jobs with type included
  const featuredJobs = [
    {
      id: 1,
      title: 'Web Development Intern',
      company: 'Internkaksha IT Solutions',
      type: 'Internship',
      link: 'https://www.linkedin.com/jobs/view/4046313049/?alternateChannel=search&refId=c597cf6b-549c-4853-9418-6262f0cc1da8&trackingId=bJYZAyOwQtWqj2%2F96JCWuw%3D%3D',
    },
    {
      id: 2,
      title: 'Cloud and Observability Engineer',
      company: 'Coralogix',
      type: 'Full-Time',
      link: '#', // Placeholder for the actual job link
    },
    {
      id: 3,
      title: 'AR / VR / Metaverse Developer',
      company: 'Tata Consultancy Services',
      type: 'Full-time',
      link: 'https://www.linkedin.com/jobs/view/4026954698/?alternateChannel=search&refId=ftML1Jp%2FY76jxMgS6hNzAg%3D%3D&trackingId=o2u9UkevSiJtjcueA7o8eA%3D%3D',
    },
    {
      id: 4,
      title: 'Data entry executive',
      company: 'Aspect Solution',
      type: 'Part-Time',
      link: 'https://www.linkedin.com/jobs/view/4038852331/?alternateChannel=search&refId=0c5900f7-0835-4f4b-9c35-54866ef78a63&trackingId=fU43PGMqQOSLsoPje9KhIw%3D%3D',
    },
    {
      id: 5,
      title: 'Full Stack Development',
      company: 'Shanthi IT Solution',
      type: 'Internship',
      link: 'https://www.linkedin.com/jobs/view/4024787426/?alternateChannel=search&refId=Y19p%2Brql5GGwQnq8%2BFo4YQ%3D%3D&trackingId=lf%2B8lYvwD3i6QxxGJZbN4w%3D%3D',
    },
    {
      id: 6,
      title: 'Website Development',
      company: 'Branups',
      type: 'Internship',
      link: 'https://www.linkedin.com/jobs/view/4037154839/?alternateChannel=search&refId=KlauJo3w3HwnQ0mJVbQcaA%3D%3D&trackingId=YAnoMaeMFClLfiwXhecF0w%3D%3D',
    },
    {
      id: 7,
      title: 'ServiceNow Developer',
      company: 'Tata Consultancy Services',
      type: 'Part-Time',
      link: 'https://www.linkedin.com/jobs/view/4019985981/?alternateChannel=search&refId=qeu77wftppBzVDFZMmomVQ%3D%3D&trackingId=%2FSkP7ZxCb6BHxEMT629u4A%3D%3D',
    },
    {
      id: 8,
      title: 'AR / VR / Metaverse Developer',
      company: 'Tata Consultancy Services',
      type: 'Full-time',
      link: 'https://www.linkedin.com/jobs/view/4026954698/?alternateChannel=search&refId=ftML1Jp%2FY76jxMgS6hNzAg%3D%3D&trackingId=o2u9UkevSiJtjcueA7o8eA%3D%3D',
    },
    {
      id: 9,
      title: 'Full Stack Development',
      company: 'Aaresh IT Solution',
      type: 'Internship',
      link: 'https://www.linkedin.com/jobs/view/4024787426/?alternateChannel=search&refId=Y19p%2Brql5GGwQnq8%2BFo4YQ%3D%3D&trackingId=lf%2B8lYvwD3i6QxxGJZbN4w%3D%3D',
    },
  ];

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`);
  };

  const handleWorkModeChange = (event) => {
    const { name, checked } = event.target;
    setSelectedWorkModes((prevModes) => ({
      ...prevModes,
      [name]: checked,
    }));
  };

  // Filter jobs based on search query and selected work modes
  const filteredJobs = featuredJobs.filter((job) => {
    const matchesSearchQuery = job.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesWorkMode =
      (selectedWorkModes.internship && job.type === 'Internship') ||
      (selectedWorkModes.partTime && job.type === 'Part-Time') ||
      (selectedWorkModes.fullTime && job.type === 'Full-Time');

    return matchesSearchQuery && (matchesWorkMode || Object.values(selectedWorkModes).every((val) => !val));
  });

  return (
    <div className="jobs-section">
      <h2>Job Listings</h2>
      
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Job Title, Skill, or Company Name" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Find</button>
      </div>

      <div className="work-mode-container">
        <h3>Work Modes</h3>
        <label>
          <input
            type="checkbox" 
            name="internship"
            checked={selectedWorkModes.internship}
            onChange={handleWorkModeChange}
          /> Internship
        </label><br />
        <label>
          <input
            type="checkbox"
            name="partTime"
            checked={selectedWorkModes.partTime}
            onChange={handleWorkModeChange}
          /> Part-Time
        </label><br />
        <label>
          <input
            type="checkbox"
            name="fullTime"
            checked={selectedWorkModes.fullTime}
            onChange={handleWorkModeChange}
          /> Full-Time
        </label>
      </div>

      <h3>Featured Jobs</h3>
      <div className="featured-jobs">
        {(filteredJobs.length > 0 ? filteredJobs : featuredJobs).map((job) => (
          <div key={job.id} className="job-card">
            <h4>{job.title} <span className="job-type">({job.type})</span></h4>
            <p>{job.company}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              <button className="easy-apply-button">Easy Apply</button>
            </a>
          </div>
        ))}
        {filteredJobs.length === 0 && <p>No jobs found matching your criteria.</p>}
      </div>
    </div>
  );
};

export default JobsPage;
