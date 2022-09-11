import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'http://10.0.2.2:3003';

export const api = axios.create({
  baseURL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

api.interceptors.request.use(
  (response) => response,
  (error) => {
    throw error;
  }
);
