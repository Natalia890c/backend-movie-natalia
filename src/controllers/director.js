const Director = require('../modulos/director')
const { request, response } = require('express')

const getDirector = async(req = request, res = response) => {
    try {
       const director = await Director.find()
       res.status(200).send({ directores:director });
    } catch (error) {
        res.status(400).send("Error al obtener el registro")
    }
}

const getByIdDirector = async(req = request, res = response) => {
    try {
        const directorId = req.params.id;
        const director = await Director.findById (directorId);
        res.status(200).send({ director});
    } catch (error) {
        res.status(400).send({ message: 'Error al obtener el registro', error});
    }
}

const postDirector = async (req = request, res = response) => {
    try {
        const director = await Director.create(req.body); 
        console.log(director);
        res.status(200).send({ message: 'El director se ha creado exitosamente', directorCreado: director});
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el registro', error});
    }
}

const putDirector = async (req = request, res = response) => {
    try {
        const directorId = req.params.id;
        const newData = req.body; 
        const director = await Director.findById(directorId);

        director.set(newData);
        await director.save();

        res.status(200).send({ message: 'El director se ha actualizado correctamente', directorActualizado: director });
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar el registro', error });
    }
}

const deleteDirector = async (req = request, res = response) => {
    try {
        const directorId = req.params.id;
        const result = await Director.deleteOne({ _id: directorId });
        res.status(200).send({ message: 'El director se ha eliminado correctamente', director: result });
    } catch (error) {
        res.status(400).send({ message: 'Error al eliminar el registro', error });
    }
}

module.exports = {
    getDirector,
    getByIdDirector,
    postDirector,
    putDirector,
    deleteDirector
}
