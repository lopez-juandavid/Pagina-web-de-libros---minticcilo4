// constante con la importación de mongoose
const mongoose = require('mongoose');

// conexión a mongodb
mongoose.connect(process.env.MONGO_DIR)
  .then(() => {
    console.log('Conectados con exito!');
  })
  .catch(() => {
    console.log('Oops algo salio mal!');
  });