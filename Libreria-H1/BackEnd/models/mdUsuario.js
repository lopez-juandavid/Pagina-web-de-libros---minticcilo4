// importando / requiriendo
const mongoose = require('mongoose');

// construyendo el esquema del usuario
const esquemaUsuario = mongoose.Schema({
  rol: String,
  nombre: String,
  apellido: String,
  cedula: String,
  correo: String,
  contrasena: String,
  compras: [{
    _id: String
  }]
});

// quitamos la contraseña del JSON por seguridad
esquemaUsuario.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.contrasena;
  }
});

// construyendo el modelo
const usuario = mongoose.model('usuario', esquemaUsuario);

// exportamos
module.exports = usuario;