import React, { useState } from 'react';
import { createApplication } from '../api';

const CreateApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    jobId: '',
    jobUrl: '',
    resume: '',
    company: '',
    creatorId: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await createApplication(formData);
    if (success) {
      alert('Application created successfully');
    } else {
      alert('Failed to create application');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 to-indigo-800">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-4">Request a Referral</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="jobId" className="block text-sm font-medium text-gray-700">Job ID</label>
            <input
              type="text"
              name="jobId"
              id="jobId"
              placeholder="Job ID"
              value={formData.jobId}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="jobUrl" className="block text-sm font-medium text-gray-700">Job URL</label>
            <input
              type="url"
              name="jobUrl"
              id="jobUrl"
              placeholder="Job Posting URL"
              value={formData.jobUrl}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
            <input
              type="text"
              name="resume"
              id="resume"
              placeholder="Resume Details/Link"
              value={formData.resume}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Target Company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="creatorId" className="block text-sm font-medium text-gray-700">Creator ID</label>
            <input
              type="text"
              name="creatorId"
              id="creatorId"
              placeholder="Your Creator ID"
              value={formData.creatorId}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Submit Referral Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateApplication;
