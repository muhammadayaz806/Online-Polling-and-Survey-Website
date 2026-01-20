import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
});

export const fetchPolls = async () => {
  const { data } = await client.get('/polls');
  return data;
};

export const fetchPoll = async (pollId) => {
  const { data } = await client.get(`/polls/${pollId}`);
  return data;
};

export const submitVote = async (pollId, payload) => {
  const { data } = await client.post(`/polls/${pollId}/vote`, payload);
  return data;
};

