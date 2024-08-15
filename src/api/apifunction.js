import axios from 'axios';

const BASE_URL = 'http://localhost:3004';

export const getSliders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sliders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sliders:', error);
    throw error;
  }
};

export const getBodyguards = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/bodyguards`);
    return response.data;
  } catch (error) {
    console.error('Error fetching boduguards:', error);
    throw error;
  }
};

export const getContracts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contracts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contracts:', error);
    throw error;
  }
};

export const getSchedules = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/schedules`);
    return response.data;
  } catch (error) {
    console.error('Error fetching schedules:', error);
    throw error;
  }
};
