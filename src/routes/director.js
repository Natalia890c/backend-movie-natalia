const express = require("express")
const router = express.Router();
const {getDirector, getByIdDirector, postDirector, putDirector, deleteDirector} = require('../controllers/director')


//Obtener Director
router.get('/director', getDirector)

//Obtener Director por ID
router.get('/director/:id', getByIdDirector)

//Crear Director
router.post("/director", postDirector)

//Actualizar Director
router.put("/director/:id", putDirector)

//Eliminar Director
router.delete('/director/:id', deleteDirector);

module.exports = router