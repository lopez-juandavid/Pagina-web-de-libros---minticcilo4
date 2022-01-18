import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const CompraLibro = ({
  precio = 0,
  titulo = "",
  imagen = "",
  autor = "",
  funcion,
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

  const history = useHistory();

  const handleComprar = () => {
    const rol = sessionStorage.getItem("rol");
    if (rol !== "_no_admin_") {
      history.push("/login");
      return;
    }
    const id = sessionStorage.getItem("idUsuario");
    setDesabilitar(true);
    const compra = {
      titulo,
      imagen,
      autor,
      cantidad: unidades,
      total: unidades * precio,
      cliente: id,
    };
    axios
      .post("https://backend-eraseunavez.herokuapp.com/compras", compra)
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
      <h5 className="form-control text-center d-inline user-select-none">
        {unidades}
      </h5>
      <button className="btn btn-primary mx-4 my-4" onClick={handleMas}>
        +
      </button>
      <button
        className={`btn btn-success ms-md-4 width-100 ${
          desabilitar && "disabled"
        }`}
        onClick={handleComprar}
      >
        Comprar
      </button>
    </div>
  );
};

export default CompraLibro;
