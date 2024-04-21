const { Schema, model } = require('mongoose')

const DirectoresSchema = Schema ({

    nombre: {
        type: String,
        required: [true, 'Director requerido'],
        minlenght: 1
    },

    imagen: {
        type: String,
        default: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
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

module.exports = model('Directores', DirectoresSchema)