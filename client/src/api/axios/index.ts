import axios from 'axios';
import { API_URL } from '../../key';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

export default instance;
