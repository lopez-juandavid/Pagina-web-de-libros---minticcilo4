import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosLibros } from "../helpers/axiosLibros";
import CompraLibro from "../components/CompraLibro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const InfoBook = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState({});
  useEffect(() => {
    const call = async () => {
      const books = await axiosLibros();
      const need = books.data.filter((book) => book._id === id);
      setLibro(need[0]);
    };
    call();
  }, []);
  return (
    <div>
      <Navbar buscarFlag={false} />
      <div className="container-fluid mt-2">
        <div className="row">
          {/* primer contenedor */}
          <div className="col-12 col-md-4">
            <div className=" text-center">
              {/* <div className="card-body"> */}
              <img
                src={libro.imagen}
                alt={`imagen de ${libro.titulo}`}
                style={{ width: "100%" }}
              />
              {/* </div> */}
              <div className="text-muted">{`Editorial • ${libro.editorial} • ${libro.fechaPublicacion}`}</div>
            </div>
          </div>
          {/* segundo contenedor */}
          <div className="col-12 col-md-8">
            {/* <div className="card-header"> */}
            <h3 className="card-title my-4">{libro.titulo}</h3>
            <h6 className="card-title mb-4">{libro.autor}</h6>
            {/* </div> */}
            <CompraLibro
              precio={libro.precio}
              id={id}
              imagen={libro.imagen}
              titulo={libro.titulo}
              autor={libro.autor}
            />
            <h5 className="card-title my-4">DESCRIPCIÓN DEL LIBRO</h5>
            <h5 className="card-text">{libro.descripcion}</h5>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer buscarFlag={false} />
    </div>
  );
};

export default InfoBook;
