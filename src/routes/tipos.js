const express = require("express")
const router = express.Router();
const { getTipos, getByIdTipos, postTipos, putTipos, deleteTipos} = require('../controllers/tipos')


//Crear Tipo
router.post("/", postTipos)

//Obtener Tipo
router.get('/', getTipos)

//Obtener Tipo por id
router.get('/:id', getByIdTipos)

//Actualizar Dato
router.put('/:id', putTipos)

//Eliminar Tipo
router.delete('/:id', deleteTipos)

module.exports = router