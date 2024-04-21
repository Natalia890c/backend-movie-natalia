const { Schema, model } = require('mongoose')

const GenerosSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'Dato Nombre es requerido'],
    minlength: 1
  },

  imagen: {
    type: String,
    default: ''
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

  fechaActualizacion: {
    type: Date,
    default: new Date(),
  },

  descripcion: {
    type: String,
    required: [true, 'Dato Description es requerido'],
  }

})

module.exports = model('Generos', GenerosSchema)