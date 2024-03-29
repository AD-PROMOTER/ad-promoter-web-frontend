import axios from 'axios';

const BASE_URL = 'https://api.ad-promoter.com';

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
