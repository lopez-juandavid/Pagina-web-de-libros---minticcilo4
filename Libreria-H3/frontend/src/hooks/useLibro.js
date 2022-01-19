import { useState } from 'react'

export const useLibro = () => {

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [autor, setAutor] = useState("");
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState("");
  const [fecha, setFecha] = useState("");
  const [editorial, setEditorial] = useState("");

  const handleTitulo = (evt) => {
    if (evt.target) {
      setTitulo(evt.target.value);
    } else {
      setTitulo(evt);
    }
  };

  const handleDescripcion = (evt) => {
    if(evt.target) {
      setDescripcion(evt.target.value);
    } else {
      setDescripcion(evt);
    }
  };

  const handleAutor = (evt) => {
    if (evt.target) {
      setAutor(evt.target.value);
    } else {
      setAutor(evt);
    }
  };

  const handleImagen = (evt) => {
    if (evt.target) {
      setImagen(evt.target.value);
    } else {
      setImagen(evt);
    }
  };

  const handlePrecio = (evt) => {
    if (evt.target) {
      setPrecio(evt.target.value);
    } else {
      setPrecio(evt);
    }
  };

  const handleFecha = (evt) => {
    if (evt.target) {
      setFecha(evt.target.value);
    } else {
      setFecha(evt);
    }
  };

  const handleEditorial = (evt) => {
    if (evt.target) {
      setEditorial(evt.target.value);
    } else {
      setEditorial(evt);
    }
  }

  return [titulo, handleTitulo, descripcion, handleDescripcion, autor, handleAutor, imagen, handleImagen, precio, handlePrecio, fecha, handleFecha, editorial, handleEditorial];
}
