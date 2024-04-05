const { Schema, model } = require('mongoose');

const MediasSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'El serial ya existe']
    },
    titulo: {
        type: String,
        required: [true, 'Título requerido']
    },
    sinopsis: String,
    url: String,
    imagen: String,
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    },
    añoEstreno: {
        type: Date,
        default: Date.now
    },
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Generos',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipos',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Directores',
        required: true
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productoras',
        required: true
    }
});

const MediasModel = model('Medias', MediasSchema);

module.exports = MediasModel;
