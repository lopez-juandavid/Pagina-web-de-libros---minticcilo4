// importando / requiriendo
const express = require("express");
const router = express.Router();
const compra = require("../models/mdCompra");
const usuario = require("../models/mdUsuario");

// para usar JSON en el post
router.use(express.json());

// ~ OBTENER TODAS LAS COMPRAS ~
router.get("/compras", (req, res) => {
  compra
    .find({})
    .then((ans) => {
      return res.send(ans);
    })
    .catch(() => {
      return res.status(400).end();
    });
});

// ~ OBTENER TODAS LAS COMPRAS DE UN USUARIO POR SU ID ~
router.get("/compras/historial/:id", (req, res) => {
  const { id } = req.params;
  compra
    .find({ cliente: id })
    .then((ans) => {
      res.send(ans);
    })
    .catch((err) => {
      res.status(500).json({ info: err });
    });
});

// ~ AGREGAR UNA COMPRA ~
router.post("/compras", async (req, res) => {
  try {
    const { titulo, imagen, autor, cantidad, total, cliente } = req.body;
    if (!titulo || !imagen || !autor || !cantidad || !total || !cliente) {
      return res.status(400).json({ info: "hacen falta datos" });
    }
    const obj_compra = new compra({
      titulo,
      imagen,
      autor,
      cantidad,
      total,
      cliente,
      confirmado: false,
    });
    const save = await obj_compra.save();
    const user = await usuario.findById(cliente);
    user.compras.push(save._id);
    await user.save();
    res.send(save);
  } catch (err) {
    res.status(500).json({ Error: err.name });
  }
});

// ~ OBTENEMOS UNA COMPRA A PARTIR DEL ID ~
router.get("/compras/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const ans = await compra.findById(id);
    if (ans) {
      return res.send(ans);
    } else {
      return res.status(404).json({ Info: "Compra no encontrada" });
    }
  } catch (err) {
    return res.status(400).json({ Error: "Error en el id de la compra" });
  }
});

// ~ OBTENER LAS COMPRAS QUE NO HAN SIDO ATENDIDAS ~
router.get("/pendientes", (req, res) => {
  compra
    .find({ confirmado: false })
    .then((ans) => {
      res.send(ans);
    })
    .catch((err) => {
      res.send(err);
    });
});

// ~ CONFIRMAR LA VENTA ~
router.put("/pendientes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pendiente = await compra.findById(id);
    pendiente.confirmado = true;
    await pendiente.save();
    res.send(pendiente);
  } catch (exc) {
    res.status(500).json({ error: exc.name });
  }
});

// ~ BORRAR TODAS LAS COMPRAS ~ "solo para desarrollo" ~
router.delete("/compras", async (req, res) => {
  const r = await compra.deleteMany({});
  res.send(r);
});

// exportamos
module.exports = router;
