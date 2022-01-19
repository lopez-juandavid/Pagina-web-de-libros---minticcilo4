import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const NavbarAdmin = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push("/");
  };

  return (
    <div >
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-md verde text-light">
        <div className="container-fluid">
          📖
          <Link to="/admin" className="navbar-brand user-select-none">
            Había una vez
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
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar: Titulo, Autor" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form> */}
            <div className="navbar-nav ">
              <Link to="/pedidos" className="nav-link cursor user-select-none text-light">
                Pedidos
              </Link>
              <Link to="/addBook" className="nav-link text-light">
                Agregar Libro
              </Link>
              <span
                onClick={handleLogout}
                className="nav-link cursor user-select-none text-light"
              >
                Salir
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
