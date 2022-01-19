import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";
import { axiosLibros } from "../helpers/axiosLibros";

const Navbar = ({ buscarFlag }) => {
  // states
  const [busqueda, setBusqueda] = useState("");
  const { setBooks } = useContext(BookContext);
  // other
  const logged = true;
  // handle logout
  const handleLogout = () => {
    alert("en desarrollo");
  };
  // handle search
  const handleSearch = async () => {
    const res = await axiosLibros();
    const resBusqueda = res.data.filter((libro) => {
      let { titulo, autor } = libro;
      titulo = titulo.toLowerCase();
      autor = autor.toLowerCase();
      const bus = busqueda.toLocaleLowerCase();
      return titulo.includes(bus) || autor.includes(bus);
    });
    if (resBusqueda.length > 0) {
      setBooks(resBusqueda);
    } else {
      alert("no hay respuesta");
      const all = await axiosLibros();
      setBooks(all.data);
    }
  };
  // handle change
  const handleChange = (evt) => {
    setBusqueda(evt.target.value);
  };

  return (
    <div className= "verde">
      {/* Barra de navegación */}
      <nav className="navbar navbar-dark navbar-expand-md">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h3> 📖  Libreria Había Una Vez </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mt-3 mt-md-0 justify-content-between"
            id="navbarTogglerDemo01"
          >
            <div />
            {/* formulario de busqueda */}
            {buscarFlag && (
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar: Titulo, Autor"
                  value={busqueda}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-outline-light"
                  type="button"
                  onClick={handleSearch}
                >
                  Buscar
                </button>
              </div>
            )}
            {logged ? (
              <div className="navbar-nav">
                <Link to="/miscompras" className="nav-link">
                  Mis Compras
                </Link>
                <span onClick={handleLogout} className="nav-link cursor">
                  Salir
                </span>
              </div>
            ) : (
              <div className="navbar-nav">
                <Link to="/addUsuario" className="nav-link">
                  Registrar
                </Link>
                <Link to="/login" className="nav-link">
                  Iniciar Sesión
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <img
        src="/assets/eraseunavez.png"
        alt=""
        style={{
          width: "100%",
          // height: "10rem",
        }}
      />
    </div>
  );
};

export default Navbar;
