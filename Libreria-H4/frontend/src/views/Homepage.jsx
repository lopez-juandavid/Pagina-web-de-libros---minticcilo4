import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useApiGet } from "../hooks/useApiGet";
import { useState } from "react";
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Homepage = () => {
  useApiGet();
  const [busqueda, setBusqueda] = useState("");
  const buscar = (busqueda) => {
    setBusqueda(busqueda);
  };

  const history = useHistory();
  useEffect(() => {
    const ls = sessionStorage.getItem("token");
    const rol = sessionStorage.getItem("rol");
    if (rol === "_admin_") history.push ("/admin")
  }, [])
  return (
    // <div className="bg-secondary bg-opacity-50">
    <div className="">
      <Navbar buscarFlag={true} buscar={buscar} />
      <Cards busqueda={busqueda} />
      <Footer />
    </div>
  );
};

export default Homepage;
