import api from './api';

export const getBosses = async (limit = 100) => {
  const response = await api.get(`/bosses?limit=${limit}`);
  return response.data.data;
};
