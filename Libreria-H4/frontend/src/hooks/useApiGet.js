import { useEffect } from "react";
import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { axiosLibros } from '../helpers/axiosLibros';

export const useApiGet = () => {
  const { setBooks } = useContext(BookContext);
  useEffect(() => {
    const llamada = async () => {
      const res = await axiosLibros();
      setBooks(res.data);
    };
    llamada();
  }, [setBooks]);
};