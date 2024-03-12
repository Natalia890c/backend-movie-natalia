const { Schema, model} = require('mongoose')

const ProductoraSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'Dato requerido'],
        minlength: 1
    },

    estado: {
        type: Boolean,
        default: true,
        required: true
    },

    fechaCreacion: {
        type: Date,
        default: new Date(),
    },

    fechaActualización: {
        type: Date,
        default: new Date(),
    },

    slogan: {
        type: String,
        required: true
    },

    descripcion: {
        type: String
    }

})

module.exports = model('Productora',ProductoraSchema)