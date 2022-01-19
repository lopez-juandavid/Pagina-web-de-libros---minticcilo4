// importaciones
require('dotenv').config();
require('./mongo/mongo');

// constantes
const express = require('express');
const app = express();
// const cors = require('cors');

// uses
// app.use(cors);
app.use(require('./controller/root'));
app.use(require('./controller/ctUsuario'));
app.use(require('./controller/ctLibro'));

// iniciar el servidor en el puerto que tengamos en el entorno de usuario
app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo!');
});