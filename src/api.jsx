import axios from 'axios';

const API_URL = 'http://localhost:8080/referred';

export const createApplication = async (applicationData) => {
  const response = await axios.post(`${API_URL}/createApplication`, applicationData);
  return response.data;
};

export const deleteApplication = async (applicationId) => {
  const response = await axios.post(`${API_URL}/deleteApplication/${applicationId}`);
  return response.data;
};

export const editApplication = async (applicationId, applicationData) => {
  const response = await axios.post(`${API_URL}/editApplication/${applicationId}`, applicationData);
  return response.data;
};

export const completeApplication = async (applicationId) => {
  const response = await axios.post(`${API_URL}/completeApplication/${applicationId}`);
  return response.data;
};
