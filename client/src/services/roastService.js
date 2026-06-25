import axios from "axios";

const API_URL = "http://localhost:5000/api/roast";

export const roastUrl = async (url) => {
  const response = await axios.post(API_URL, { url });
  return response.data;
};

export const getRecentRoasts = async () => {
  const response = await axios.get(`${API_URL}/recent`);
  return response.data;
};
