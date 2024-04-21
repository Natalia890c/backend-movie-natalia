const { Schema, model} = require('mongoose')

const TiposSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'nombre de tipo requerido'],
        minlength: 1
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },

    imagen: {
        type: String,
        default: ''
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

module.exports = model('Tipos', TiposSchema)