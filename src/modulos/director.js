const { Schema, model } = require('mongoose')

const DirectorSchema = Schema ({

    nombres: {
        type: String,
        required: [true, 'Director requerido'],
        minlenght: 1
    },

    estado: {
        type: Boolean,
        required: true,
        default: true
    },

    fechaCreacion: {
        type: Date,
        default: new Date(),
    },

    fechaActualizacion: {
        type: Date,
        default: new Date(),
    }

})

module.exports = model('Director', DirectorSchema)