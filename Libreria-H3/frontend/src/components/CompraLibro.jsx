import React, { useState } from "react";
import axios from "axios";

const CompraLibro = ({
  precio = 0,
  id = "",
  titulo = "",
  imagen = "",
  autor = "",
  funcion
}) => {
  const [desabilitar, setDesabilitar] = useState(false);
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
    // suponiendo que el usuario ya inició sesión y su id es 61abbc4b0c6c4004e55745fd
    setDesabilitar(true);
    const compra = {
      titulo,
      imagen,
      autor,
      cantidad: unidades,
      total: unidades * precio,
      cliente: "61abbc4b0c6c4004e55745fd",
    };
    axios
      .post("http://localhost:2021/compras", compra)
      .then(() => {
        funcion();
        setUnidades(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="text-center">
      <h5 className="d-md-inline me-md-4">{`$${precio * unidades}`}</h5>
      <button className="btn btn-primary mx-4 my-4" onClick={handleMenos}>
        -
      </button>
      <h5 className="form-control text-center d-inline user-select-none">{unidades}</h5>
      <button className="btn btn-primary mx-4 my-4" onClick={handleMas}>
        +
      </button>
      <button
        className={`btn btn-success ms-md-4 width-100 ${desabilitar && "disabled"}`}
        onClick={handleComprar}
      >
        Comprar
      </button>
    </div>
  );
};

export default CompraLibro;
