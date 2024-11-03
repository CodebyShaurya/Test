import React, { useState } from 'react';
import { deleteApplication } from '../api';

const DeleteApplication = () => {
  const [applicationId, setApplicationId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await deleteApplication(applicationId);
    if (success) {
      alert('Application deleted successfully');
    } else {
      alert('Failed to delete application');
    }
  };

  return (
    <div>
      <h2>Delete Application</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Application ID"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
          required
        />
        <button type="submit">Delete Application</button>
      </form>
    </div>
  );
};

export default DeleteApplication;
