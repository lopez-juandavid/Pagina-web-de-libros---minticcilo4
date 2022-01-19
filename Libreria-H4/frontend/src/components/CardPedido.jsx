import React, { useState, useEffect } from "react";
import axios from "axios";

const CardPedido = ({ info = {}, boton = true, callUpdate }) => {
  const [infoCliente, setInfoCliente] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:2021/usuarios/${info.cliente}`)
      .then((ans) => {
        setInfoCliente(ans.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleConfirmar = () => {
    axios
      .put(`http://localhost:2021/pendientes/${info._id}`)
      .then(() => {
        callUpdate();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={`card my-3 border-2 border-warning ${boton ? "sombra2" : "sombra"}`} style={{ width: "18rem" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{infoCliente.nombre}</li>
        <li className="list-group-item">{infoCliente.correo}</li>
        <li className="list-group-item">{infoCliente.cedula}</li>
        <li className="list-group-item">{info.titulo}</li>
        <li className="list-group-item">X{info.cantidad}</li>
        <li className="list-group-item">${info.total}</li>
        {boton && (
          <button onClick={handleConfirmar} className="btn btn-success">
            Confirmar
          </button>
        )}
      </ul>
    </div>
  );
};

export default CardPedido;
