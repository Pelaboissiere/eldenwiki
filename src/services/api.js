import axios from 'axios';

const api = axios.create({
  baseURL: 'https://eldenring.fanapis.com/api',
});

export default api;
