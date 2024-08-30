import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function JobApplicationPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [nhifNumber, setNhifNumber] = useState('');
  const [nssfNumber, setNssfNumber] = useState('');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  useEffect(() => {
    // Fetch job details based on jobId
    // Example static data
    const jobListings = [
      { id: 1, title: 'Avocado Picker', description: 'Pick avocados during the harvest season.' },
      { id: 2, title: 'Quality Inspector', description: 'Inspect avocados for quality and readiness.' },
    ];
    const jobDetails = jobListings.find(job => job.id === parseInt(jobId));
    setJob(jobDetails);
  }, [jobId]);

  const saveApplication = (applicationData) => {
    // Simulate saving data with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Application saved:', applicationData);
        resolve();
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const applicationData = {
      jobId,
      name: applicantName,
      email: applicantEmail,
      nhifNumber,
      nssfNumber
    };

    try {
      await saveApplication(applicationData);
      setApplicationSubmitted(true);
    } catch (error) {
      console.error('Error saving application:', error);
      // Optionally set an error state to display a message to the user
    }
  };

  return (
    <div className='job-application'>
      {job ? (
        <div className='job-page'>
          <h2>Apply for {job.title}</h2>
          <p>{job.description}</p>
          {applicationSubmitted ? (
            <p>Thank you for your application!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder='Names...'
                  required
                />
                Name:
              </label>
              <label>
                <input
                  type="email"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  placeholder='Email...'
                  required
                />
                Email:
              </label>
              <label>
                <input
                  type="text"
                  value={nhifNumber}
                  onChange={(e) => setNhifNumber(e.target.value)}
                  placeholder='NHIF...'
                  required
                />
                NHIF Number:
              </label>
              <label>
                <input
                  type="text"
                  value={nssfNumber}
                  onChange={(e) => setNssfNumber(e.target.value)}
                  placeholder='NSSF...'
                  required
                />
                NSSF Number:
              </label>
              <button type="submit">Submit Application</button>
            </form>
          )}
        </div>
      ) : (
        <p>Job not found</p>
      )}
    </div>
  );
}

export default JobApplicationPage;
