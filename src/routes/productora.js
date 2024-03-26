const express = require("express")
const router = express.Router();
const {getProductora, postProductora, getByIdProductora, putProductora, deleteProductora} = require('../controllers/productora')


//Crear Productora
router.post("/productora", postProductora)

//Obtener Productora
router.get('/productora', getProductora)

//Obtener Productora por id
router.get('/productora/:id', getByIdProductora)

//Actualizar Dato
 router.put('/productora/:id', putProductora)

//Eliminar Productora
 router.delete('/productora/:id', deleteProductora);

module.exports = router