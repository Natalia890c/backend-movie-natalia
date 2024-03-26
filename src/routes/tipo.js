const express = require("express")
const router = express.Router();
const { getTipo, getByIdTipo, postTipo, putTipo, deleteTipo} = require('../controllers/tipo')


//Crear Tipo
router.post("/tipo", postTipo)

//Obtener Tipo
router.get('/tipo', getTipo)

//Obtener Tipo por id
router.get('/tipo/:id', getByIdTipo)

//Actualizar Dato
router.put('/tipo/:id', putTipo)

//Eliminar Tipo
// router.delete('/tipo/:id', deleteTipo)

module.exports = router