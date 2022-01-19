import React, { useState, useEffect } from "react";
import axios from "axios";

const CardPedido = ({ info = {}, boton = true, callUpdate }) => {
  const [infoCliente, setInfoCliente] = useState({});
  console.log("cliente", info.cliente);
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
  console.log(info);
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
    <div className="card my-2" style={{ width: "18rem" }}>
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
