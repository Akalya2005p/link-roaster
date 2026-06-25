import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const roastUrl = async (url) => {
  const response = await axios.post(`${API_URL}/api/roast`, { url });
  return response.data;
};

export const getRecentRoasts = async () => {
  const response = await axios.get(`${API_URL}/api/roast/recent`);
  return response.data;
};
