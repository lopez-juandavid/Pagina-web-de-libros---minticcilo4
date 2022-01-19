import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useApiGet } from "../hooks/useApiGet";
import { useState } from "react";

const Homepage = () => {
  useApiGet();
  const [busqueda, setBusqueda] = useState("");
  const buscar = (busqueda) => {
    setBusqueda(busqueda);
  };
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
