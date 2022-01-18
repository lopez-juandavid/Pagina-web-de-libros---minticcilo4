// importando / requiriendo
const express = require("express");
const router = express.Router();
const compra = require("../models/mdCompra");
const usuario = require("../models/mdUsuario");
const nodemailer = require("nodemailer");

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
    // CORREO DE CONFIRMACIÓN
    const cliente = await usuario.findById(pendiente.cliente);
    const { correo } = cliente;
    // definir el transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Usuariodeprueba0502@gmail.com",
        pass: "correodeprueba",
      },
    });
    // definir el email
    const mailConfig = {
      from: "Había una vez",
      to: cliente.correo,
      subject: "Compra Confirmada",
      html: `<div style="background:#e9c46a;padding:20px;border-radius:10px;box-shadow:5px 5px #f4a261">
      <h2 style="color:#264653">
        📗Había una vez📗
      </h2>
      <p>
        Cordial saludo <strong>${cliente.nombre}</strong> <strong>${cliente.apellido}</strong>, hemos tenido el gusto de confirmar su compra con la siguente información:
      </p>
      <p>
        Titulo: <strong>${pendiente.titulo}</strong>
      </p>
      <p>
        Cantidad: <strong>${pendiente.cantidad}</strong>
      </p>
      <p>
        Total: $<strong>${pendiente.total}</strong>
      </p>
      <p>
        Le pedimos por favor que esté pendiente de recibir su compra
      </p>
      <h3>
        Gracias por su compra
      </h3>
    </div>`,
    };
    // enviar el correo
    transporter.sendMail(mailConfig, (error, info) => {
      if (error) {
        return res.status(500).json({ error: error.name });
      }
    });
    return res.send(pendiente);
  } catch (exc) {
    return res.status(500).json({ error: exc.name });
  }
});

// ~ BORRAR TODAS LAS COMPRAS ~ "solo para desarrollo" ~
router.delete("/compras", async (req, res) => {
  const r = await compra.deleteMany({});
  res.send(r);
});

// exportamos
module.exports = router;
