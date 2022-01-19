import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {


  return (
    <div>
      {/* Barra de navegación */}
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">📖Había una vez</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mt-3 mt-md-0 justify-content-between" id="navbarTogglerDemo01">
            <div/>
            <form className="d-flex">
              <input class="form-control me-2" type="search" placeholder="Buscar: Titulo, Autor" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            <div className="navbar-nav">
              <a href="#" className="nav-link">Registrar</a>
              <a href="#" className="nav-link">Ingresar</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
