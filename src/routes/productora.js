const express = require("express")
const router = express.Router();

// Obtener Productora
router.get("/productora", (req, res) => {
    res.send("Obtener Productora")
});

//Crear Productora
router.post("/productora", (req, res) => {
    res.send("Crear Productora")
});

//Actualizar Productora
router.put("/productora", (req, res) => {
    res.send("Actualizar Productora")
});

//Eliminar Productora
router.delete("/productora", (req, res) => {
    res.send("Eliminar Productora")
});

module.exports = router