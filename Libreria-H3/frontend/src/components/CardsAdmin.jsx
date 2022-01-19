import React, { useContext, useState } from "react";
import CardAdmin from "../components/CardAdmin";
import { BookContext } from "../contexts/BookContext";
import axios from "axios";
import { axiosLibros } from "../helpers/axiosLibros";

const CardsAdmin = () => {
  const { books, setBooks } = useContext(BookContext);
  const [idDelete, setIdDelete] = useState("");

  const handleIdDelete = (titulo) => {
    setIdDelete(titulo);
  };

  const handleEliminar = () => {
    axios.delete(`http://localhost:2021/libros/${idDelete}`).then(async () => {
      const all = await axiosLibros();
      setBooks(all.data);
    });
  };

  return (
    <div className="container mt-4">
      <div
        className="modal fade"
        id="eliminar"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ¿Está seguro de eliminar el libro?
              </h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-info"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handleEliminar}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {books &&
          books.map((i) => {
            return (
              <div className="col" key={i._id}>
                <CardAdmin
                  imagen={i.imagen}
                  titulo={i.titulo}
                  autor={i.autor}
                  _id={i._id}
                  eliminar={handleIdDelete}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CardsAdmin;
