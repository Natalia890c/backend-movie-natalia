const Tipo = require('../modulos/tipo')
const { request, response } = require('express')

const getTipo = async (req = request, res = response) => {
    try {
        const tipo = await Tipo.find()
        res.status(200).send({ tipos: tipo });
    } catch (error) {
        res.status(400).send("Error al obtener el registro")
    }
}

const getByIdTipo = async (req = request, res = response) => {
    try {
        const tipoId = req.params.id;
        const tipo = await Tipo.findById(tipoId);
        res.status(200).send({ tipo });
    } catch (error) {
        res.status(400).send({ message: 'Error al obtener el registro', error });
    }
}

const postTipo = async (req = request, res = response) => {
    try {
        const tipo = await Tipo.create(req.body);
        console.log(tipo);
        res.status(200).send({ message: 'El tipo se ha creado correctamente', tipoCreado: tipo });
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el registro', error });
    }
}

const putTipo = async (req = request, res = response) => {
    try {
        const tipoId = req.params.id;
        const newData = req.body; 
        const tipo = await Tipo.findById(tipoId);

        tipo.set(newData);
        await tipo.save();

        res.status(200).send({ message: 'El tipo se ha actualizado correctamente', tipoActualizado: tipo });
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar el registro', error });
    }
}

const deleteTipo = async (req = request, res = response) => {
    try {
        const tipoId = req.params.id;
        const result = await Tipo.deleteOne({ _id: tipoId });
        res.status(200).send({ message: 'El tipo se ha eliminado correctamente', tipo: result });
    } catch (error) {
        res.status(400).send({ message: 'Error al eliminar el registro', error });
    }
}


module.exports = {
    getTipo,
    getByIdTipo,
    postTipo,
    putTipo,
    deleteTipo
}