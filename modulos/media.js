const { Schema, model} = require('mongoose')

const MediaSchema = Schema({

    serial: {
        type: String,
        required: [true, 'serial requerido'],
        unique: [true, 'media ya existe']
    },

    titulo: {
        type: String,
        required: [true, 'titulo requerido']
    },

    sinopsis: {
        type: String
    },

    url: {
        type: String
    },

    imagen: {
        type: String,
    },

    fechaCreacion: {
        type: String,
        default: new Date(),
    },

    fechaActualizacion: {
        type: String,
        default: new Date(),
    },

    añoEstreno: {
        type: Date,
        default: new Date(),
    },

    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true 
    },

    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    },

    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },

    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        requiered: true
    }
});

module.exports = model('Media', MediaSchema)
