const Genero = require('../modulos/genero')
const { request, response } = require('express')

const getGenero = async (req = request, res = response) => {
    try {
        const genero = await Genero.find()
        res.status(200).send({ generos: genero });
    } catch (error) {
        res.status(400).send("Error al obtener el registro")
    }
}

const getByIdGenero = async (req = request, res = response) => {
    try {
        const generoId = req.params.id;
        const genero = await Genero.findById(generoId);
        res.status(200).send({ genero });
    } catch (error) {
        res.status(400).send({ message: 'Error al obtener el registro', error });
    }
}

const postGenero = async (req = request, res = response) => {
    try {
        const genero = await Genero.create(req.body);
        console.log(genero);
        res.status(200).send({ message: 'El género se ha creado correctamente', generoCreado: genero });
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el registro', error });
    }
}

const putGenero = async (req = request, res = response) => {
    try {
        const generoId = req.params.id;
        const newData = req.body; 
        const genero = await Genero.findById(generoId);

        genero.set(newData);
        await genero.save();

        res.status(200).send({ message: 'El género se ha actualizado correctamente', generoActualizado: genero });
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar el registro', error });
    }
}

const deleteGenero = async (req = request, res = response) => {
    try {
        const generoId = req.params.id;
        const result = await Genero.deleteOne({ _id: generoId });
        res.status(200).send({ message: 'El género se ha eliminado correctamente', genero: result });
    } catch (error) {
        res.status(400).send({ message: 'Error al eliminar el registro', error });
    }
}


module.exports = {
    getGenero,
    postGenero,
    getByIdGenero,
    putGenero,
    deleteGenero
}