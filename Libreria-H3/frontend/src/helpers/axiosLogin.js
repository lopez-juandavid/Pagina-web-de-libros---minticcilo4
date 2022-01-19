import axios from 'axios';

export const axiosLogin = async () => {
  return await axios.get('http://localhost:2021/login');
};