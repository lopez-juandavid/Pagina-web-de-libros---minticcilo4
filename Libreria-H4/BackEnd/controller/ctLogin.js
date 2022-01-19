// importando / requiriendo
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usuario = require("../models/mdUsuario");

// constantes
const router = express.Router();

// logica
router.post("/login", async (req, res) => {
  const { cedula, contrasena } = req.body;
  const usuarioS = await usuario.findOne({ cedula });
  const match = !usuarioS
    ? null
    : await bcrypt.compare(contrasena, usuarioS.contrasena);
  if (!match) {
    // return res.status(401).json({ info: "cedula o contrasena incorrecta" });
    return res.json ({
      mensaje: 'Cédula o Contraseña Incorrecta',
    });
  }
  const infoToken = {
    id: usuarioS._id,
    cedula: usuarioS.cedula,
  };
  const token = jwt.sign(infoToken, "libreria");
  res.send({
    mensaje: 'Bienvenido',
    nombre: usuarioS.nombre,
    id: usuarioS._id,
    token,
    rol: usuarioS.rol
  });
});

// exportamos el router
module.exports = router;
