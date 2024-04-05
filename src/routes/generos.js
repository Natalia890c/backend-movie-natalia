const express = require("express")
const router = express.Router();
const {getGeneros, postGeneros, getByIdGeneros, putGeneros, deleteGeneros} = require('../controllers/generos')


//Crear Genero
router.post("/", postGeneros)

//Obtener Genero
router.get('/', getGeneros)

//Obtener Genero por id
router.get('/:id', getByIdGeneros)

//Actualizar Dato
router.put('/:id', putGeneros)

//Eliminar Genero
router.delete('/:id', deleteGeneros);

module.exports = router