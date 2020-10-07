import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.MELI_URL,
});
