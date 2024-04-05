const express = require("express")
const router = express.Router();
const {getProductoras, postProductoras, getByIdProductoras, putProductoras, deleteProductoras} = require('../controllers/productoras')


//Crear Productora
router.post("/", postProductoras)

//Obtener Productora
router.get('/', getProductoras)

//Obtener Productora por id
router.get('/:id', getByIdProductoras)

//Actualizar Dato
 router.put('/:id', putProductoras)

//Eliminar Productora
 router.delete('/:id', deleteProductoras);

module.exports = router