const express = require("express")
const router = express.Router();

//Obtener Director
router.get("/director", (req, res) => {
    res.send("Obtener Director")
});

//Crear Director
router.post("/director", (req, res) => {
    res.send("Crear Director")
});

//Actualizar Director
router.put("/director", (req, res) => {
    res.send("Actualizar Director")
});

//Eliminar Director
router.delete("/director", (req, res) => {
    res.send("Eliminar Director")
});

module.exports = router