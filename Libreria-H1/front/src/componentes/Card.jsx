import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ imagen, titulo, autor }) => {
  return (
    <div className="d-flex justify-content-center user-select-none">
      <div className="card m-2 border-dark bg-warning bg-opacity-50 shadow" style={{ width: '18rem' }}>
        <img src={imagen} className="card-img-top" alt={`Imagen de ${titulo}`} />
        <div className="card-body">
          <h4 className="card-title">{titulo}</h4>
          <h5 className="card-title">{autor}</h5>
          <a href="#" className="btn btn-primary">Ver Información</a>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  autor: PropTypes.string
}

export default Card