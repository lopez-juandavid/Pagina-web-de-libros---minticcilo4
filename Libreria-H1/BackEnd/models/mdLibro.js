// importando / requiriendo
const mongoose = require('mongoose');

// construyendo el esquema del libro
const esquemaLibro = mongoose.Schema({
  titulo: String,
  descripcion: String,
  autor: String,
  imagen: String,
  precio: Number,
  fechaPublicacion: String,
  editorial: String
});

// construyendo el modelo
const libro = mongoose.model('libro', esquemaLibro);

// exportamos
module.exports = libro;