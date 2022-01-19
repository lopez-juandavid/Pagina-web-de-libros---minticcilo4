import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardAdmin = ({ imagen, titulo, autor, _id, eliminar }) => {
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
          <div className="d-grid gap-2">
            <Link to={`/updateBook/${_id}`} className="btn btn-primary">
              Actualizar
            </Link>
            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#eliminar" onClick={() => eliminar(_id)}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardAdmin.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  autor: PropTypes.string,
  eliminar: PropTypes.func,
  _id: PropTypes.string,
};

export default CardAdmin;
