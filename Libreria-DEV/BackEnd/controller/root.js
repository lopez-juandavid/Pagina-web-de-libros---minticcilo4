const express = require('express');
const router = express.Router();

// ruta raíz
router.get('/', (req, res) => {
  res.send('<body style="background-color:#84E296;display:flex;justify-content:center;align-items:center"><div style="height:95%;width:95%;background-color:#E3D87E;border-radius:20px;box-shadow:10px 10px #748067;display:flex;justify-content:center;align-items:center;border:1px solid #FFFC31;"><p style="font-family:fantasy;font-size:70px;">📚HABÍA UNA VEZ📖</p></div></body>');
});

module.exports = router;