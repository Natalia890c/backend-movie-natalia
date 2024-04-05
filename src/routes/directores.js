const express = require("express")
const router = express.Router();
const {getDirectores, getByIdDirectores, postDirectores, putDirectores, deleteDirectores} = require('../controllers/directores')


//Obtener Director
router.get('/', getDirectores)

//Obtener Director por ID
router.get('/:id', getByIdDirectores)

//Crear Director
router.post("/", postDirectores)

//Actualizar Director
router.put("/:id", putDirectores)

//Eliminar Director
router.delete('/:id', deleteDirectores);

module.exports = router