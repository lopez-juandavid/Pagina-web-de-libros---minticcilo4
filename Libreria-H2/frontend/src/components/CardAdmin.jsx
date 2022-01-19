import React, { useContext } from 'react';
import { axiosLibros } from '../helpers/axiosLibros';
import { BookContext } from '../contexts/BookContext';
import PropTypes from 'prop-types'
import axios from 'axios';
import { Link } from 'react-router-dom';

const CardAdmin = ({ imagen, titulo, autor, _id }) => {
  
  const { setBooks } = useContext(BookContext);
  
  const handleEliminar =  () => {
    axios.delete(`http://localhost:2021/libros/${_id}`)
    .then(async () => {
      const all =  await axiosLibros();
      setBooks(all.data);
    });
  };
  
  return (
    <div className="d-flex justify-content-center user-select-none">
      <div className="card m-2 border-dark bg-warning bg-opacity-50 sombra" style={{ width: '18rem' }}>
        <img src={imagen} className="card-img-top" alt={`Imagen de ${titulo}`} style={{ width: '286px', height: '200px' }} />
        <div className="card-body">
          <h4 className="card-title">{titulo}</h4>
          <h5 className="card-title">{autor}</h5>
          <div className="d-grid gap-2">
            <Link to={`/updateBook/${_id}`} className="btn btn-primary">Actualizar</Link>
            <button className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

CardAdmin.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  autor: PropTypes.string
}

export default CardAdmin
