const express = require("express")
const router = express.Router();
const {getMedias, getByIdMedias, postMedias, putMedias, deleteMedias} = require('../controllers/medias')


//Obtener Media
router.get('/', getMedias)

//Obtener Media por Id
router.get('/:id', getByIdMedias)

//Crear Media
router.post('/', postMedias)

//Actualizar Media
router.put('/:id', putMedias)

//Eliminar Media
router.delete('/:id', deleteMedias)

module.exports = router