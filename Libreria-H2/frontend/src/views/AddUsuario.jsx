import React, { useState } from "react";
import axios from "axios";
// import { Form } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUsuario } from "../hooks/useUsuario";
import SuccessMsg from "../components/SuccessMsg";

const AddUsuario = () => {
    const [configuracion, setConfiguracion] = useState(["off", ""]);
    const [
        rol,
        handleRol,
        nombre,
        handleNombre,
        apellido,
        handleApellido,
        cedula,
        handleCedula,
        correo,
        handleCorreo,
        contrasena,
        handleContrasena,
    ] = useUsuario();

    const timeMessage = async (msg, color) => {
        setConfiguracion([msg, color]);
        setTimeout(() => {
          setConfiguracion(["off", color]);
        }, 3000);
      };

      const handleRegistrar = (evt) => {
        evt.preventDefault();
        const usuario = {
          rol,
          nombre,
          apellido,
          cedula,
          correo,
          contrasena,
        };
        axios
          .post("http://localhost:2021/usuarios", usuario)
          .then((ans) => {
            timeMessage("El usuario ha sido registrado", "bg-success");
            console.log(ans);
            // restablecemos los valores para un nuevo libro
            handleRol("");
            handleNombre("");
            handleApellido("");
            handleCedula("");
            handleCorreo("");
            handleContrasena("");
          })
          .catch((ans) => {
            timeMessage("Por favor complete todos los campos", "bg-danger");
            console.log(ans);
          });
      };

      return (
        <div>
            <Navbar />
            <div className = "amarillo">
                <div className="fijo">
                {configuracion[0] !== "off" && (
                    <SuccessMsg configuracion={configuracion} />
                )}
                </div>
            </div>

            <div className="container mt-4">
            <br />
            <div className="row">
            <div className="col-md-7  mx-auto">
                <div className="card">
                <div className="container text-center fa-5x">
                    <i className="fas fa-user-plus"></i>
                </div>
                <div class="header-titulos">
                    <div className="card-header text-center">
                        <h4>Registro de Usuario</h4>
                    </div>
                </div>
                
                <div className="card-body">
                    <form onSubmit={"guardar"}>
                    <div className="row">
                        <br />
                        {/* Nombre del usuario */}
                        <div className="col-md-6">
                            <label>Nombre</label>
                            <input type="text" className="form-control required" placeholder="Nombre del usuario" value={nombre} onChange={handleNombre} />
                        </div>

                        {/* Apellido del usuario */}
                        <div className="col-md-6">
                        <label>Apellido</label>
                        <input type="text" className="form-control required" placeholder="Apellido del usuario" value={apellido} onChange={handleApellido} />
                        </div>

                        {/* Cédula del usuario */}
                        <div className="col-md-6">
                        <label>Cédula</label>
                        <input type="text" className="form-control required" placeholder="Cédula del usuario" value={cedula} onChange={handleCedula} />
                        </div>

                        {/* Correo Electrónico del usuario */}
                        <div className="col-md-6">
                        <label>Correo Electrónico</label>
                        <input type="text" className="form-control required" placeholder="Correo electrónico del usuario" value={correo} onChange={handleCorreo} />
                        </div>

                        {/* Contraseña del usuario */}
                        <div className="col-md-6">
                        <label>Contraseña</label>
                        <input type="text" className="form-control required" placeholder="Contraseña del usuario" value={contrasena} onChange={handleContrasena} />
                        </div>

                    </div>
                    <br />

                    <button
                        onClick={handleRegistrar}
                        type="button"
                        className="btn btn-primary"
                    >
                        Registrar
                    </button>
                    </form>
                </div>
                </div>
            </div>
            </div>
            <br />
            <br />
        </div>
        <Footer />
        </div>
    );
};

export default AddUsuario;