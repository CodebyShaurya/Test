import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock job data
const jobData = [
  {
    id: 1,
    jobId: 'J453',
    company: 'Facebook',
    logo: 'https://freepnglogo.com/images/all_img/facebook-circle-logo-png.png',
    position: 'Software Engineer',
    location: 'San Francisco, CA',
    premium: true,
    registeredCandidates: 134,
  },
  {
    id: 2,
    jobId: 'J784',
    company: 'Google',
    logo: 'https://blog.hubspot.com/marketing/google-logo-history',
    position: 'Data Scientist',
    location: 'New York, NY',
    premium: false,
    registeredCandidates: 98,
  },
  {
    id: 3,
    jobId: 'J234',
    company: 'Microsoft',
    logo: 'https://via.placeholder.com/50',
    position: 'Product Manager',
    location: 'Seattle, WA',
    premium: true,
    registeredCandidates: 76,
  },
  // Add more mock jobs as needed
];

// Extract unique companies and positions
const uniqueCompanies = [...new Set(jobData.map((job) => job.company))];
const uniquePositions = [...new Set(jobData.map((job) => job.position))];

const JobListing = () => {
  const [search, setSearch] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [positionFilter, setPositionFilter] = useState('');
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const [companySuggestions, setCompanySuggestions] = useState([]);
  const [positionSuggestions, setPositionSuggestions] = useState([]);
  const navigate = useNavigate();

  // Filter jobs based on user input
  const filteredJobs = jobData.filter((job) => {
    const matchesSearch =
      job.position.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.jobId.toLowerCase().includes(search.toLowerCase());
    const matchesCompany = companyFilter ? job.company.toLowerCase().includes(companyFilter.toLowerCase()) : true;
    const matchesPosition = positionFilter ? job.position.toLowerCase().includes(positionFilter.toLowerCase()) : true;
    const matchesPremium = showPremiumOnly ? job.premium : true;

    return matchesSearch && matchesCompany && matchesPosition && matchesPremium;
  });

  const handleCompanyChange = (e) => {
    const value = e.target.value;
    setCompanyFilter(value);
    if (value) {
      setCompanySuggestions(
        uniqueCompanies.filter((company) =>
          company.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setCompanySuggestions([]);
    }
  };

  const handlePositionChange = (e) => {
    const value = e.target.value;
    setPositionFilter(value);
    if (value) {
      setPositionSuggestions(
        uniquePositions.filter((position) =>
          position.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setPositionSuggestions([]);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4"> */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-purple-800">Job Listings</h2>
          <button
            onClick={() => navigate('/create')}
            className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none"
          >
            Create Application
          </button>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <input
            type="text"
            placeholder="Search by company, position, or job ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          {/* Company Filter with Suggestions */}
          <div className="relative w-full lg:w-1/4">
            <input
              type="text"
              placeholder="Filter by Company"
              value={companyFilter}
              onChange={handleCompanyChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {companySuggestions.length > 0 && (
              <div className="absolute bg-white border border-gray-300 rounded-lg mt-1 z-10 w-full max-h-40 overflow-y-auto">
                {companySuggestions.map((company) => (
                  <div
                    key={company}
                    onClick={() => {
                      setCompanyFilter(company);
                      setCompanySuggestions([]);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    {company}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Position Filter with Suggestions */}
          <div className="relative w-full lg:w-1/4">
            <input
              type="text"
              placeholder="Filter by Position"
              value={positionFilter}
              onChange={handlePositionChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {positionSuggestions.length > 0 && (
              <div className="absolute bg-white border border-gray-300 rounded-lg mt-1 z-10 w-full max-h-40 overflow-y-auto">
                {positionSuggestions.map((position) => (
                  <div
                    key={position}
                    onClick={() => {
                      setPositionFilter(position);
                      setPositionSuggestions([]);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    {position}
                  </div>
                ))}
              </div>
            )}
          </div>

          <label className="inline-flex items-center lg:w-1/4">
            <input
              type="checkbox"
              checked={showPremiumOnly}
              onChange={(e) => setShowPremiumOnly(e.target.checked)}
              className="form-checkbox text-purple-600"
            />
            <span className="ml-2 text-gray-700">Show Premium Only</span>
          </label>
        </div>

        {/* Job Cards */}
        <div className="space-y-4 mt-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="flex items-center p-4 bg-white rounded-lg shadow border border-gray-200">
              <img src={job.logo} alt={`${job.company} logo`} className="w-12 h-12 mr-4 rounded-full" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{job.position}</h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-500">{job.location}</p>
                <p className="text-gray-600">Job ID: <span className="font-bold">{job.jobId}</span></p>
                <p className="text-gray-600 mt-1">Registered Candidates: <span className="font-bold">{job.registeredCandidates}</span></p>
              </div>
              {job.premium && (
                <span className="ml-auto text-sm font-semibold text-yellow-500 bg-yellow-100 rounded-full px-3 py-1">Premium</span>
              )}
            </div>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
};

export default JobListing;
