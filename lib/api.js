// lib/api.js
import axios from 'axios';

const API_URL = 'https://cae4bd92f259afebccbd.free.beeceptor.com/api';

export const fetchPosts = async () => {
  const response = await axios.get(`${API_URL}/users/`);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post(`${API_URL}/users/`, post, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const updatePost = async (id, post) => {
  const response = await axios.put(`${API_URL}/users/:${id}`, post, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${API_URL}/users/:${id}`);
  return response.data;
};
