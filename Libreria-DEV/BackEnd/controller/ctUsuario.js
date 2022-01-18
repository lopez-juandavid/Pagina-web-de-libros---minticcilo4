// importando / requiriendo
const express = require("express");
const router = express.Router();
const usuario = require("../models/mdUsuario");
const brycript = require("bcrypt");

// para poder usar JSON en el post
router.use(express.json());

// ~ OBTENEMOS TODOS LOS USUARIOS ~
router.get("/usuarios", (req, res) => {
  usuario.find({}).then((ans) => {
    res.send(ans);
  });
});

// ~ OBTENEMOS UN USUARIO POR SU ID ~
router.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  usuario
    .findById(id)
    .then((ans) => {
      res.send(ans);
    })
    .catch(() => {
      res.status(404).json({ info: "Usuario no encontrado!" });
    });
});

// ~ BORRAR TODOS LOS USUARIOS ~ / desarrollo
router.delete("/usuarios", (req, res) => {
  usuario.deleteMany({}).then((ans) => {
    res.send(ans);
  });
});

// ~ CREAMOS UN USUARIO ~
router.post("/usuarios", async (req, res) => {
  const { nombre, apellido, cedula, correo, contrasena } = req.body;
  if (!nombre || !apellido || !cedula || !correo || !contrasena) {
    return res.status(400).json({ error: "JSON invalido o vacio" });
  }
  const prueba_cedula = await usuario.findOne({ cedula });
  if (prueba_cedula) {
    return res.status(400).json({ error: "La Cedula ya esta en uso!" });
  }
  const prueba_correo = await usuario.findOne({ correo });
  if (prueba_correo) {
    return res.status(400).json({ error: "El correo ya esta en uso!" });
  }
  n_contrasena = await brycript.hash(contrasena, 10);
  const nuevo = new usuario({
    nombre,
    apellido,
    cedula,
    correo,
    contrasena: n_contrasena,
    rol: "_no_admin_",
  });
  const ans = await nuevo.save();
  return res.send(ans);
});

// exportamos el router
module.exports = router;
