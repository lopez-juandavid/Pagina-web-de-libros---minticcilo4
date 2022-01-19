import React, { useState, useEffect } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";
import CardPedido from "../components/CardPedido";

const Pedidos = () => {
  const [confirmadas, setConfirmadas] = useState([]);
  const [pendientes, setPendientes] = useState([]);
  const [update, setUpdate] = useState(false);

  const callUpdate = () => {
    setUpdate(!update);
  };
    
    useEffect(() => {
    axios
      .get(`http://localhost:2021/compras`)
      .then((ans) => {
        // sacar las ventas pendientes
        const compras = ans.data;
        setConfirmadas(compras.filter((compra) => compra.confirmado));
        setPendientes(compras.filter((compra) => !compra.confirmado));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  return (
    <div>
      <NavbarAdmin />
      {/* pendientes */}
      <div className="container-fluid bg-danger bg-opacity-75 text-center">
        Ventas Pendientes
        {pendientes.length < 1 ? (
          <div>!NO HAY VENTAS PENDIENTES¡</div>
        ) : (
          <div className="row">
            {pendientes.map((pendiente) => (
              <div
                key={pendiente._id}
                className="col  d-flex justify-content-center"
              >
                <CardPedido info={pendiente} callUpdate={callUpdate} />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* confirmados */}
      <div className="container-fluid bg-success bg-opacity-75 text-center">
        Ventas Realizadas
        {confirmadas.length < 1 ? (
          <div>!NO HAY VENTAS REALIZADAS¡</div>
        ) : (
          <div className="row">
            {confirmadas.map((confirmada) => (
              <div
                key={confirmada._id}
                className="col  d-flex justify-content-center"
              >
                <CardPedido info={confirmada} boton={false} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pedidos;
