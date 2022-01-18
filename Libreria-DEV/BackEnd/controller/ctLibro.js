// importanto / requiriendo
const express = require('express');
const router = express.Router();
const libro = require('../models/mdLibro');

// para usar JSON en el post
router.use(express.json());

// ~~ OBTENEMOS TODOS LOS LIBROS ~~
router.get('/libros', (req, res) => {
  libro.find({})
    .then(ans => {
      res.send(ans);
    });
});

// ~~ CREAMOS UN LIBRO ~~
router.post('/libros', async (req, res) => {
  const { titulo, descripcion, autor, imagen, precio, fechaPublicacion, editorial } = req.body;
  if (!titulo || !descripcion || !autor || !imagen || !precio || !fechaPublicacion || !editorial) {
    return res.status(400).json({ error: 'Faltan propiedades para el libro.' });
  }
  const nuevo = new libro({
    titulo,
    descripcion,
    autor,
    imagen,
    precio,
    fechaPublicacion,
    editorial
  });
  const ans = await nuevo.save();
  res.send(ans);
});

// ~~ BORRAMOS UN LIBRO ~~
router.delete('/libros/:id', (req, res) => {
  const { id } = req.params;
  libro.findByIdAndDelete(id)
    .then(ans => {
      res.status(200).end();
    })
    .catch(ans => {
      res.status(404).end();
    });
});

// ~~ ACTUALIZAMOS UN LIBRO ~~
router.put('/libros/:id', (req, res) => {
  const { id } = req.params;
  libro.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.status(200).end();
    })
    .catch(() => {
      res.status(400).end();
    });
});

// exportamos el router
module.exports = router;