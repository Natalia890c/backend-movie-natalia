const Genero = require('../modulos/genero')
const {request,response} = require('express')

const getGenero = async (req = request, res = response) => {
    console.log(req)

    try {
        const body = req.body
        return res.json(body)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({errorMessage:error
        })
        
    }

}

module.exportes = {
    getGenero
}