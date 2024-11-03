import React, { useState } from 'react';
import { editApplication } from '../api';

const EditApplication = () => {
  const [applicationId, setApplicationId] = useState('');
  const [formData, setFormData] = useState({
    applicantName: '',
    jobPosition: '',
    resumeUrl: '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await editApplication(applicationId, formData);
    if (success) {
      alert('Application updated successfully');
    } else {
      alert('Failed to update application');
    }
  };

  return (
    <div>
      <h2>Edit Application</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Application ID"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
          required
        />
        <input
          type="text"
          name="applicantName"
          placeholder="Applicant Name"
          value={formData.applicantName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="jobPosition"
          placeholder="Job Position"
          value={formData.jobPosition}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="resumeUrl"
          placeholder="Resume URL"
          value={formData.resumeUrl}
          onChange={handleChange}
          required
        />
        {/* Add other input fields as needed */}
        <button type="submit">Edit Application</button>
      </form>
    </div>
  );
};

export default EditApplication;
