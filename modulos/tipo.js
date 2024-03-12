const { Schema, model} = require('mongoose')

const TipoSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'nombre de tipo requerido'],
        minlength: 1
    },

    fechaCreacion: {
        type: Date,
        default: new Date(),
    },

    fechaActualización: {
        type: Date,
        default: new Date(),
    },

    descripcion: {
        type: String
    }

})

module.exports = module('Tipo', TipoSchema)