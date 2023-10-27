import axios from 'axios';
import { VITE_APP_API_URL } from '@/config';

const api = axios.create({
  baseURL: `${VITE_APP_API_URL}`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'foobar',
  },
});

// Thêm interceptor để xử lý lỗi
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
