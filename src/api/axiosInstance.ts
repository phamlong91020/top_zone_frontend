import { config } from '@/constants';
import axios from 'axios';
import queryString from 'query-string';

const axiosClient = (baseURl?: string) => {
  return axios.create({
    baseURL: baseURl || config.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
  });
};

export const apiClient = axiosClient();
