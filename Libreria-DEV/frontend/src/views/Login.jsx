import { Form, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
  const [cedula, setCedula] = useState("");
  const [contrasena, setContrasena] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const usuario = { cedula, contrasena };
    const respuesta = await Axios.post(
      "https://backend-eraseunavez.herokuapp.com/login",
      usuario
    );
    console.log(respuesta);
    const mensaje = respuesta.data.mensaje;
    const rol = respuesta.data.rol;

    if (mensaje !== "Bienvenido") {
      Swal.fire({
        icon: "error",
        title: mensaje,
        showConfirmButton: true,
        time: 3000,
      });
    } else {
      const token = respuesta.data.token;
      const nombre = respuesta.data.nombre;
      const idUsuario = respuesta.data.id;

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("nombre", nombre);
      sessionStorage.setItem("idUsuario", idUsuario);
      sessionStorage.setItem("rol", rol);

      Swal.fire({
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
        time: 5000,
      });

      if (rol !== "_no_admin_") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <br />
        <div className="row">
          <div className="col-md-5  mx-auto">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center ">Bienvenido</h2>

                <div className="card-body">
                  <Form onSubmit={login}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Número de identificación</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su número de identificación"
                        onChange={(e) => setCedula(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingrese su contraseña"
                        onChange={(e) => setContrasena(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Iniciar sesión
                    </Button>
                  </Form>
                </div>
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
}
