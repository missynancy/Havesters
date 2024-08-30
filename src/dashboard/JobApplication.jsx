import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function JobApplications() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job listings from API or service
    // Example static data
    setJobs([
      { id: 1, title: 'Avocado Picker', description: 'Pick avocados during the harvest season.' },
      { id: 2, title: 'Quality Inspector', description: 'Inspect avocados for quality and readiness.' },
    ]);
  }, []);

  return (
    <div className='job'>
      <h2>Job Applications</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <Link to={`/apply/${job.id}`}>
              <button>Apply</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobApplications;
