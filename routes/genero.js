const {Router} = require('express')
const {getGenero} = require('../controllers/genero')

const router = Router()

router.get("/genero", getGenero)