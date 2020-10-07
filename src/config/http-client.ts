import axios from 'axios';

const http = axios.create({
  baseURL: process.env.MELI_URL,
});

export default http;
