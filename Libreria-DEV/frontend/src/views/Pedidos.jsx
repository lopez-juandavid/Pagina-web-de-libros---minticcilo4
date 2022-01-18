import React, { useState, useEffect } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";
import CardPedido from "../components/CardPedido";
import { useHistory } from "react-router";

const Pedidos = () => {
  const [confirmadas, setConfirmadas] = useState([]);
  const [pendientes, setPendientes] = useState([]);
  const [update, setUpdate] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const ls = sessionStorage.getItem("token");
    const rol = sessionStorage.getItem("rol");
    if (ls === null || rol !== "_admin_") history.push("/");
  });

  const callUpdate = () => {
    setUpdate(!update);
  };

  useEffect(() => {
    axios
      .get(`https://backend-eraseunavez.herokuapp.com/compras`)
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
      <div className="amarillo" style={{ height: "10px" }}></div>
      {/* pendientes */}
      <div className="container-fluid amarillo text-center">
        <span className="fw-bold fs-4 text-shadow c-amarillo user-select-none">
          Ventas Pendientes
        </span>
        {pendientes.length < 1 ? (
          <span className="d-block mt-2 fw-bold fs-4 text-shadow c-rosa  user-select-none">
            ¡No hay ventas pendientes!
          </span>
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
      {/* barra separadora */}
      <div className="amarillo" style={{ height: "30px" }}></div>
      <div className="separator" style={{ height: "30px" }}></div>
      <div className="verde" style={{ height: "10px" }}></div>
      {/* confirmados */}
      <div className="container-fluid verde text-center">
        <span className="fw-bold fs-4 text-shadow c-verde  user-select-none">
          Ventas Confirmadas
        </span>
        {confirmadas.length < 1 ? (
          <span className="d-block mt-2 fw-bold fs-4 text-shadow c-rosa  user-select-none">
            ¡No hay ventas confirmadas!
          </span>
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
      <div className="verde" style={{ height: "30px" }}></div>
    </div>
  );
};

export default Pedidos;
