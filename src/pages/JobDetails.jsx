import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock data for jobs and registered candidates
const jobData = [
  {
    id: 1,
    jobId: 'J453',
    company: 'Facebook',
    logo: 'https://freepnglogo.com/images/all_img/facebook-circle-logo-png.png',
    position: 'Software Engineer',
    location: 'San Francisco, CA',
    premium: true,
    description: 'A role focused on developing scalable web applications and features.',
    registeredCandidates: [
      { name: 'Alice Johnson' },
      { name: 'Bob Smith' },
      { name: 'Eve Adams' },
    ],
  },
  {
    id: 2,
    jobId: 'J784',
    company: 'Google',
    logo: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg',
    position: 'Data Scientist',
    location: 'New York, NY',
    premium: false,
    description: 'A role focused on data analysis and machine learning algorithms.',
    registeredCandidates: [
      { name: 'Chris Green' },
      { name: 'Dana White' },
    ],
  },
  // Add more mock jobs as needed
];

const JobDetails = () => {
  const { jobId } = useParams(); // Get job ID from URL
  const navigate = useNavigate();

  // Find the job by jobId
  const job = jobData.find((j) => j.jobId === jobId);

  if (!job) {
    return <div>Job not found</div>;
  }

  const { company, logo, position, location, premium, description, registeredCandidates } = job;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* Job Header */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt={`${company} logo`} className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{position}</h2>
            <p className="text-gray-600">{company}</p>
            <p className="text-gray-500">{location}</p>
            {premium && (
              <span className="inline-block text-sm font-semibold text-yellow-500 bg-yellow-100 rounded-full px-3 py-1 mt-2">
                Premium
              </span>
            )}
          </div>
        </div>

        {/* Job Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Job Description</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Registered Candidates */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Registered Candidates</h3>
          <p className="text-gray-600 mb-2">
            Total registered candidates from {company}: <strong>{registeredCandidates.length}</strong>
          </p>
          <ul className="space-y-2">
            {registeredCandidates.map((candidate, index) => (
              <li key={index} className="text-gray-600">
                {candidate.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <button
          onClick={() => navigate('/create')}
          className="w-full bg-gradient-to-r from-purple-800 to-indigo-800 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none"
        >
          Add My Application
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
