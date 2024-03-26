const express = require("express")
const router = express.Router();
const {getGenero, postGenero, getByIdGenero, putGenero, deleteGenero} = require('../controllers/genero')


//Crear Genero
router.post("/genero", postGenero)

//Obtener Genero
router.get('/genero', getGenero)

//Obtener Genero por id
router.get('/genero/:id', getByIdGenero)

//Actualizar Dato
router.put('/genero/:id', putGenero)

//Eliminar Genero
router.delete('/genero/:id', deleteGenero);

module.exports = router