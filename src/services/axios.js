import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE || '/api';

const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
