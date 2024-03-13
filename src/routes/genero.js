const express  = require("express")
const router = express.Router();

//Obtener Genero
router.get( "/genero", (req, res) => {
  res.send("Obtener Genero")
});

//Crear genero
router.post("/genero", (req, res) => {
  res.send("Crear Genero")
});

//Actualizar genero
router.put("/genero", (req, res) => {
  res.send("Actualizar Genero")
});

//Eliminar genero
router.delete("/genero", (req, res) => {
  res.send("Eliminar Genero")
});






module.exports = router
