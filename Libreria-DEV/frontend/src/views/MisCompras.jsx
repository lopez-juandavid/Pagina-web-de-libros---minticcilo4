import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useHistory } from "react-router";

const MisCompras = () => {
  const [compras, setCompras] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const ls = sessionStorage.getItem("token");
    const rol = sessionStorage.getItem("rol");
    if (rol === "_admin_") {
      history.push("/admin");
      return;
    }
    if (ls === null || rol === "_admin_") {
      history.push("/");
      return;
    }
    const usuario = sessionStorage.getItem("idUsuario");
    
    axios
      .get(`https://backend-eraseunavez.herokuapp.com/compras/historial/${usuario}`)
      .then((ans) => {
        setCompras(ans.data);
        console.log(ans.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {compras.length < 1 && (
            <div className="fs-4 text-center user-select-none">
              📗
              <span className="mt-2 fw-bold text-shadow c-amarillo">
                ¡No hay compras, Anímate a compra !
              </span>
              📗
            </div>
          )}
          {compras.map((compra) => (
            <div
              key={compra._id}
              className="col mx-2 my-3 d-flex justify-content-center  user-select-none"
            >
              <div
                className={`card sombra border-success ${
                  compra.confirmado ? "bg-success" : "bg-danger"
                }`}
                style={{ width: "18rem" }}
              >
                <img
                  src={compra.imagen}
                  alt={`Imagen de ${compra.titulo}`}
                  style={{ width: "286px", height: "200px" }}
                />
                <ul className="list-group list-group-flush text-center">
                  <li className="list-group-item bg-warning">
                    {compra.titulo} • {compra.autor}
                  </li>
                  <li className="list-group-item bg-warning bg-opacity-75">
                    X{compra.cantidad} = ${compra.total}
                  </li>
                  <li
                    className={`list-group-item ${
                      compra.confirmado ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {compra.confirmado
                      ? "Compra Confirmada"
                      : "Compra Pendiente"}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MisCompras;
