import axios, { AxiosResponse } from 'axios';

const request = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

request.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

request.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => Promise.reject(error),
);

export default request;
