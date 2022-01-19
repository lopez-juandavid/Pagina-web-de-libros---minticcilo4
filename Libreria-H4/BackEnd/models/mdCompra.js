// importando / requiriendo
const mongoose = require("mongoose");

// construyendo el esquema del libro
/*
  El esquema de la compra va a guardar toda la información relevante del libro comprado
  en vez de tomar el id del libro; esto con el fin de evitar conflictos futuros por eliminación
  o actualización del mismo libro
*/
const esquemaCompra = new mongoose.Schema({
  titulo: String,
  imagen: String,
  autor: String,
  cantidad: Number,
  total: Number,
  cliente: String,
  confirmado: Boolean,
});

// construyendo el modelo
const compra = mongoose.model("compra", esquemaCompra);

// exportamos
module.exports = compra;
