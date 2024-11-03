import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data for user profile and applications
const userProfile = {
  name: 'John Doe',
  profilePicture: 'https://via.placeholder.com/150',
  resume: 'https://example.com/resume.pdf',
  currentJob: 'Software Engineer at TechCorp',
  education: 'B.Sc. in Computer Science from ABC University',
  referralCoins: 100,
};

const applications = [
  {
    id: 1,
    jobId: 'J453',
    position: 'Software Engineer',
    status: 'In Review',
  },
  {
    id: 2,
    jobId: 'J784',
    position: 'Data Scientist',
    status: 'Rejected',
  },
];

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* User Profile Section */}
        <div className="flex items-center space-x-4">
          <img src={userProfile.profilePicture} alt="Profile" className="w-24 h-24 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{userProfile.name}</h2>
            <p className="text-gray-600">{userProfile.currentJob}</p>
            <p className="text-gray-500">{userProfile.education}</p>
            <a href={userProfile.resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View Resume
            </a>
            <button
              onClick={() => navigate('/edit-profile')}
              className="mt-2 bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-1 px-3 rounded"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Referral Coins Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Referral Coins</h3>
          <p className="text-gray-600">Coins left in your account: <strong>{userProfile.referralCoins}</strong></p>
          <button
            onClick={() => navigate('/wallet')}
            className="mt-2 bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-1 px-3 rounded"
          >
            Access Wallet
          </button>
        </div>

        {/* Submitted Applications Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Submitted Applications</h3>
          <ul className="space-y-2">
            {applications.map((application) => (
              <li key={application.id} className="bg-gray-50 p-4 rounded shadow">
                <p className="font-bold">{application.position}</p>
                <p className="text-gray-600">Status: {application.status}</p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => navigate(`/edit-application/${application.jobId}`)}
                    className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-1 px-3 rounded"
                  >
                    Edit Application
                  </button>
                  <button
                    onClick={() => {
                      // Handle deletion logic here
                      console.log(`Deleting application for job ID: ${application.jobId}`);
                    }}
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Delete Application
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
