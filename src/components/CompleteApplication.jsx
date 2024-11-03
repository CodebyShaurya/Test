import React, { useState } from 'react';
import { completeApplication } from '../api';

const CompleteApplication = () => {
  const [applicationId, setApplicationId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await completeApplication(applicationId);
    if (success) {
      alert('Application marked as complete');
    } else {
      alert('Failed to complete application');
    }
  };

  return (
    <div>
      <h2>Complete Application</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Application ID"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
          required
        />
        <button type="submit">Complete Application</button>
      </form>
    </div>
  );
};

export default CompleteApplication;
