const express = require("express")
const router = express.Router();
const {getMedia, getByIdMedia, postMedia, putMedia, deleteMedia} = require('../controllers/media')


//Obtener Media
router.get('/media', getMedia)

//Obtener Media por Id
router.get('/media/:id', getByIdMedia)

//Crear Media
router.post('/media', postMedia)

//Actualizar Media
router.put('/media/:id', putMedia)

//Eliminar Media
router.delete('/media/:id', deleteMedia)

module.exports = router