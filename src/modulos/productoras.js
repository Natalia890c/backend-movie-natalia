const { Schema, model} = require('mongoose')

const ProductorasSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'Dato requerido'],
        minlength: 1
    },

    imagen: {
        type: String,
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
        required: [true, 'Dato requerido'],
    },

    descripcion: {
        type: String,
        required:[true, 'Dato requerido'],
    }

})

module.exports = model('Productoras',ProductorasSchema)