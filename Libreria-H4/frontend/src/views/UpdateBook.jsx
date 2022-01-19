import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useLibro } from "../hooks/useLibro";
import { axiosLibros } from "../helpers/axiosLibros";
import { useParams } from "react-router";
import SuccessMsg from "../components/SuccessMsg";

const UpdateBook = () => {
  const [
    titulo,
    handleTitulo,
    descripcion,
    handleDescripcion,
    autor,
    handleAutor,
    imagen,
    handleImagen,
    precio,
    handlePrecio,
    fecha,
    handleFecha,
    editorial,
    handleEditorial,
  ] = useLibro();

  const history = useHistory();

  const [configuracion, setConfiguracion] = useState(["off", ""]);

  const { id } = useParams();

  const handleCancelar = () => {
    history.push("/admin");
  };

  const timeMessage = async (msg, color, goback) => {
    setConfiguracion([msg, color]);
    setTimeout(() => {
      setConfiguracion(["off", ""]);
      goback && history.push("/admin");
    }, 3000);
  };

  const handleActualizar = () => {
    const update = {
      titulo,
      descripcion,
      autor,
      imagen,
      precio,
      fechaPublicacion: fecha,
      editorial,
    };
    for (let i in update) {
      if (!update[i] || (update[i].trim && update[i].trim() === "")) {
        timeMessage("Por favor llene todos los campos", "bg-danger", false);
        return;
      }
    }
    axios
      .put(`http://localhost:2021/libros/${id}`, update)
      .then(() => {
        timeMessage("El libro ha sido actualizado", "bg-success", true);
      })
      .catch(() => {
        timeMessage("No se pudo actualizar el libro", "bg-danger", true);
      });
  };

  useEffect(() => {
    const ls = sessionStorage.getItem("token");
    const rol = sessionStorage.getItem("rol");
    if (ls === null || rol !== "_admin_") {
      history.push("/")
      return 

    }

    const call = async () => {
      const all = await axiosLibros();
      const libro = all.data.filter((i) => i._id === id);
      handleTitulo(libro[0].titulo);
      handleAutor(libro[0].autor);
      handlePrecio(libro[0].precio);
      handleFecha(libro[0].fechaPublicacion);
      handleImagen(libro[0].imagen);
      handleDescripcion(libro[0].descripcion);
      handleEditorial(libro[0].editorial);
      console.log("fin");
    };
    call();
  }, []);

  return (
    <div>
      <div className="fijo">
        <p className="text-light fs-5 bg-dark py-2 text-center user-select-none">
          Agrega la información del libro
        </p>
        {configuracion[0] !== "off" && (
          <SuccessMsg configuracion={configuracion} />
        )}
      </div>
      <form className="m-3 m-md-5 border border-4 rounded-3 p-2 p-md-4">
        {/* titulo del libro */}
        <div className="mb-3 d-grid">
          <label className="form-label">
            Titulo
            <input
              type="text"
              className="form-control"
              placeholder="Titulo del libro"
              value={titulo}
              onChange={handleTitulo}
            />
          </label>
        </div>
        {/* descripcion */}
        <div className="mb-3 d-grid">
          <label className="form-label">
            Descripción / Sinopsis
            <textarea
              className="form-control"
              rows="2"
              placeholder="Descripción para el libro"
              value={descripcion}
              onChange={handleDescripcion}
            ></textarea>
          </label>
        </div>
        {/* autor */}
        <div className="mb-3 d-grid">
          <label className="form-label">
            Autor
            <input
              type="text"
              className="form-control"
              placeholder="Autor del libro"
              value={autor}
              onChange={handleAutor}
            />
          </label>
        </div>
        {/* imagen */}
        <div className="mb-3 d-grid">
          <label className="form-label">
            Imagen URL
            <input
              type="text"
              className="form-control"
              placeholder="Link de la imagen para el libro"
              value={imagen}
              onChange={handleImagen}
            />
          </label>
        </div>
        {/* precio */}
        <div className="mb-3 d-grid">
          <label className="form-label">Precio</label>
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="Precio del libro"
            value={precio}
            onChange={handlePrecio}
          />
        </div>
        {/* fecha publicacion */}
        <div className="mb-3 d-grid">
          <label className="form-label">
            Fecha Publicación
            <input
              type="date"
              min="0"
              className="form-control"
              value={fecha}
              onChange={handleFecha}
            />
          </label>
        </div>
        {/* editorial */}
        <div className="mb-3 d-grid">
          <label className="form-label">
            Editorial
            <input
              type="text"
              className="form-control"
              placeholder="Editorial del libro"
              value={editorial}
              onChange={handleEditorial}
            />
          </label>
        </div>
        <div className="d-grid gap-3">
          <button
            onClick={handleActualizar}
            type="button"
            className="btn btn-success"
          >
            Actualizar
          </button>
          <button
            onClick={handleCancelar}
            type="button"
            className="btn btn-warning"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
