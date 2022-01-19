import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ imagen, titulo, autor }) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
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
