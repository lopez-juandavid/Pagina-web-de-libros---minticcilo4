import { useState } from 'react'

export const useUsuario = () => {

  const [rol, setRol] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleRol = (evt) => {
    if (evt.target) {
      setRol(evt.target.value);
    } else {
      setRol(evt);
    }
  };

  const handleNombre = (evt) => {
    if(evt.target) {
      setNombre(evt.target.value);
    } else {
      setNombre(evt);
    }
  };

  const handleApellido = (evt) => {
    if (evt.target) {
      setApellido(evt.target.value);
    } else {
      setApellido(evt);
    }
  };

  const handleCedula = (evt) => {
    if (evt.target) {
      setCedula(evt.target.value);
    } else {
      setCedula(evt);
    }
  };

  const handleCorreo = (evt) => {
    if (evt.target) {
      setCorreo(evt.target.value);
    } else {
      setCorreo(evt);
    }
  };

  const handleContrasena = (evt) => {
    if (evt.target) {
      setContrasena(evt.target.value);
    } else {
      setContrasena(evt);
    }
  };

  return [rol, handleRol, nombre, handleNombre, apellido, handleApellido, cedula, handleCedula, correo, handleCorreo, contrasena, handleContrasena];
}
