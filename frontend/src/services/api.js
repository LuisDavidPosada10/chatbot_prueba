import axios from "axios";

const API_URL = import.meta.env.VITE_APIURL;

export const getMessages = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const sendMessage = async (message) => {
    const response = await axios.post(API_URL, {content: message});
    return response.data;
};

export const deleteMessages = async () => {
    const response = await axios.delete(API_URL);
    return response.data;
}