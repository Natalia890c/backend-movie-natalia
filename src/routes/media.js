const express = require("express")
const router = express.Router();

//Obtener Media
router.get("/media", (req, res) => {
    res.send("Obtener Media")
});

//Crear Media
router.post("/media", (req, res) => {
    res.send("Crear Media")
});

//Actualizar Media
router.put("/media", (req, res) => {
    res.send("Actualizar Media")
});

//Eliminar Media
router.delete("/media", (req, res) => {
    res.send("Eliminar Media")
});

module.exports = router