import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

const Card = ({ imagen, titulo, autor, id }) => {
  const history = useHistory();

  const handleInfo = () => {
    history.push(`/infoBook/${id}`);
  };

  return (
    <div className="d-flex justify-content-center user-select-none">
      <div
        className="card m-2 border-dark bg-warning bg-opacity-50 sombra"
        style={{ width: "18rem" }}
      >
        <img
          src={imagen}
          className="card-img-top"
          alt={`Imagen de ${titulo}`}
          style={{ width: "286px", height: "200px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{titulo}</h4>
          <h5 className="card-title">{autor}</h5>
          <div className="d-grid">
            <button onClick={handleInfo} className="btn btn-primary">
              Ver Información
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

<div className=""></div>

Card.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  autor: PropTypes.string,
};

export default Card;
