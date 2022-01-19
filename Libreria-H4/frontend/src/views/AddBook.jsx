import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useLibro } from "../hooks/useLibro";
import SuccessMsg from "../components/SuccessMsg";
import NavbarAdmin from "../components/NavbarAdmin";
import "../components/styles/Navbar.css";

const AddBook = () => {
  const [configuracion, setConfiguracion] = useState(["off", ""]);
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
  
  useEffect(() => {
    const ls = sessionStorage.getItem("token");
    const rol = sessionStorage.getItem("rol");
    if (ls === null || rol !== "_admin_" ) history.push("/")
    
  });

  const handleCancelar = () => {
    history.push("/admin");
  };

  const timeMessage = async (msg, color) => {
    setConfiguracion([msg, color]);
    setTimeout(() => {
      setConfiguracion(["off", color]);
    }, 3000);
  };

  const handleGuardar = (evt) => {
    evt.preventDefault();
    const libro = {
      titulo,
      descripcion,
      autor,
      imagen,
      precio,
      fechaPublicacion: fecha,
      editorial,
    };
    axios
      .post("http://localhost:2021/libros", libro)
      .then((ans) => {
        timeMessage("El libro ha sido agregado", "bg-success");
        console.log(ans);
        // restablecemos los valores para un nuevo libro
        handleTitulo("");
        handleDescripcion("");
        handleAutor("");
        handleImagen("");
        handlePrecio("");
        handleFecha("");
        handleEditorial("");
      })
      .catch((ans) => {
        timeMessage("Por favor complete todos los campos", "bg-danger");
        console.log(ans);
      });
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="amarillo">
        <p className="text-dark fs-5 py-2 text-center user-select-none">
          Agrega la información del libro
        </p>
      </div>
      {configuracion[0] !== "off" && (
        <SuccessMsg configuracion={configuracion} />
      )}
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
            onClick={handleGuardar}
            type="button"
            className="btn btn-primary"
          >
            Guardar
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

export default AddBook;
