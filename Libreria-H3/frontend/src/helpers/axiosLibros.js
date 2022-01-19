import axios from 'axios';

export const axiosLibros = async () => {
  return await axios.get('http://localhost:2021/libros');
};