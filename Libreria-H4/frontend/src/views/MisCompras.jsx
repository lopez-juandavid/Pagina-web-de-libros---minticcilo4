import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useHistory } from "react-router";

const usuario = "61abbc4b0c6c4004e55745fd";

const MisCompras = () => {
  const [compras, setCompras] = useState([]);

  const history = useHistory ()

  useEffect(() => {
      const ls = sessionStorage.getItem("token");
      const rol = sessionStorage.getItem("rol");
      if (rol === "_admin_") history.push ("/admin")
      if (ls === null || rol === "_admin_" ) history.push("/")

    axios
      .get(`http://localhost:2021/compras/historial/${usuario}`)
      .then((ans) => {
        setCompras(ans.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {compras.map((compra) => (
            <div
              key={compra._id}
              className="col mx-2 my-2 d-flex justify-content-center  user-select-none"
            >
              <div
                className="card border-dark sombra bg-opacity-50 m-2"
                style={{ width: "18rem" }}
              >
                <img
                  src={compra.imagen}
                  alt={`Imagen de ${compra.titulo}`}
                  style={{ width: "286px", height: "200px" }}
                />
                <ul className="list-group list-group-flush text-center">
                  <li className="list-group-item bg-secondary bg-opacity-50">
                    {compra.titulo} • {compra.autor}
                  </li>
                  <li className="list-group-item bg-secondary bg-opacity-75">
                    X{compra.cantidad} = ${compra.total}
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
