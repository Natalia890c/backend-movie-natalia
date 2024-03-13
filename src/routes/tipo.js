const express = require("express")
const router = express.Router();


//Obtener Tipo
router.get( "/tipo", (req, res) => {
    res.send("Obtener Tipo")
});

//Crear Tipo
router.post("/tipo", (req, res) => {
    res.send("Crear Tipo")
});

//Actualizar Tipo
router.put("/tipo", (req, res) => {
    res.send("Actualizar Tipo")
});

//Eliminar Tipo
router.delete("/tipo", (req, res) => {
    res.send("Eliminar Tipo")
});

module.exports = router