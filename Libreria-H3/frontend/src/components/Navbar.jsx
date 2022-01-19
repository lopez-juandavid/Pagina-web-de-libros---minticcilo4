import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { axiosLibros } from "../helpers/axiosLibros";

const Navbar = ({ buscarFlag, buscar }) => {
  // states
  const [busqueda, setBusqueda] = useState("");
  // const [books, setBooks] = useState([]);
  // other
  // handle logout
  // const handleLogout = () => {
  //   alert("en desarrollo");
  // };
  // handle search
  // const handleSearch = async () => {
  //   const res = await axiosLibros();
  //   const resBusqueda = res.data.filter((libro) => {
  //     let { titulo, autor } = libro;
  //     titulo = titulo.toLowerCase();
  //     autor = autor.toLowerCase();
  //     const bus = busqueda.toLocaleLowerCase();
  //     return titulo.includes(bus) || autor.includes(bus);
  //   });
  //   if (resBusqueda.length > 0) {
  //     setBooks(resBusqueda);
  //   } else {
  //     const all = await axiosLibros();
  //     setBooks(all.data);
  //   }
  // };
  // handle change
  const handleChange = (evt) => {
    setBusqueda(evt.target.value);
  };

  // pruebas
  useEffect(() => {
    buscar && buscar(busqueda);
  }, [busqueda]);
  // fin prueba

  // Inicio Visualización de los componentes de la Barra

  const[logged, setLogged] = useState(false)

  useEffect(() => {

      if(sessionStorage.getItem('token')){
          setLogged(true)
      }
       
  }, []);

  const salir=()=>{

      sessionStorage.clear()
      window.location.href="/"

  }

  //Fin 


  return (
    <div className= "verde">
      {/* Barra de navegación */}
      <nav className="navbar navbar-dark navbar-expand-md">
        <div className="container-fluid">
          📖
          <Link className="navbar-brand" to="/">
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
                {/* <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={handleSearch}
                >
                  Buscar
                </button> */}
              </div>
            )}
            {logged ? (
              <div className="navbar-nav" >
                <Link to="/miscompras" className="nav-link">
                  Mis Compras
                </Link>
                <span onClick={salir} className="nav-link cursor" >
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
