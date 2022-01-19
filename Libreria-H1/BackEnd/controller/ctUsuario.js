// importando / requiriendo
const express = require('express');
const router = express.Router();
const usuario = require('../models/mdUsuario');

// para poder usar JSON en el post
router.use(express.json());

// ~ OBTENEMOS TODOS LOS USUARIOS ~
router.get('/usuarios', (req, res) => {
  usuario.find({})
    .then(ans => {
      res.send(ans);
    })
});

// ~ CREAMOS UN USUARIO ~
router.post('/usuarios', async (req, res) => {
  const { nombre, apellido, cedula, correo, contrasena } = req.body;
  if (!nombre || !apellido || !cedula || !correo || !contrasena) {
    return res.status(400).json({ error: 'JSON invalido o vacio' });
  }
  const prueba_cedula = await usuario.findOne({cedula});
  if (prueba_cedula) {
    return res.status(400).json({ error: 'La Cedula ya esta en uso!' });
  }
  const prueba_correo = await usuario.findOne({correo});
  console.log(prueba_correo);
  if (prueba_correo) {
    return res.status(400).json({ error: 'El correo ya esta en uso!' });
  }
  const nuevo = new usuario({
    nombre,
    apellido,
    cedula,
    correo,
    contrasena
  });
  const ans = await nuevo.save();
  return res.send(ans);
});

// exportamos el router
module.exports = router;