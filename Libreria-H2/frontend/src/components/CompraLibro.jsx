import React, { useState } from "react";
import axios from "axios";

const CompraLibro = ({
  precio = 0,
  id = "",
  titulo = "",
  imagen = "",
  autor = "",
}) => {
  const [unidades, setUnidades] = useState(1);

  const handleMas = () => {
    setUnidades(() => unidades + 1);
  };

  const handleMenos = () => {
    if (unidades > 1) {
      setUnidades(() => unidades - 1);
    }
  };

  const handleComprar = () => {
    // suponiendo que el usuario ya inició sesión y su id es 61aa5f472656d9fd1ff7dbc7
    const compra = {
      titulo,
      imagen,
      autor,
      cantidad: unidades,
      total: unidades * precio,
      cliente: "61aa5f472656d9fd1ff7dbc7",
    };
    axios
      .post("http://localhost:2021/compras", compra)
      .then((ans) => {
        console.log(ans);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="text-center">
      <h5 className="d-md-inline me-md-4">{`$${precio * unidades}`}</h5>
      <button className="btn btn-primary mx-4 " onClick={handleMenos}>
        -
      </button>
      <h5 className="form-control text-center d-inline my-4 user-select-none">{unidades}</h5>
      <button className="btn btn-primary mx-4 my-4" onClick={handleMas}>
        +
      </button>
      <button
        className="btn btn-success ms-md-4 width-100"
        onClick={handleComprar}
      >
        Comprar
      </button>
    </div>
  );
};

export default CompraLibro;
