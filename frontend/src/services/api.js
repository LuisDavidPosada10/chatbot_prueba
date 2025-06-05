import axios from "axios";

const API_URL = import.meta.env.VITE_APIURL;

export const getMessages = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching messages:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(API_URL, { content: message });
    return response.data;
  } catch (error) {
    console.error(
      "Error sending message:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const deleteMessages = async () => {
  try {
    const response = await axios.delete(API_URL);
    if (!response.data.success) {
      throw new Error(response.data.message || 'Delete failed');
    }
    return response.data;
  } catch (error) {
    console.error('Delete error:', error.response?.data || error.message);
    throw error;
  }
};