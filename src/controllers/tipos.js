const Tipos = require('../modulos/tipos')
const { request, response } = require('express')

const getTipos = async (req = request, res = response) => {
    try {
        const tipos = await Tipos.find({estado:true})
        res.status(200).send(tipos);
    } catch (error) {
        res.status(400).send("Error al obtener el registro")
    }
}

const getByIdTipos = async (req = request, res = response) => {
    try {
        const tiposId = req.params.id;
        const tipos = await Tipos.findById(tiposId);
        res.status(200).send({ tipos });
    } catch (error) {
        res.status(400).send({ message: 'Error al obtener el registro', error });
    }
}

const postTipos = async (req = request, res = response) => {
    try {
        const tipos = await Tipos.create(req.body);
        console.log(tipos);
        res.status(200).send({ message: 'El tipo se ha creado correctamente', tipoCreado: tipos });
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el registro', error });
    }
    
}

const putTipos = async (req = request, res = response) => {
    try {
        const tiposId = req.params.id;
        const newData = req.body; 
        const tipos = await Tipos.findById(tiposId);
        newData.fechaActualizacion = new Date();
        tipos.set(newData);
        await tipos.save();

        res.status(200).send({ message: 'El tipo se ha actualizado correctamente', tipoActualizado: tipos });
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar el registro', error });
    }
}

const deleteTipos = async (req = request, res = response) => {
    try {
        const tiposId = req.params.id;
        const result = await Tipos.deleteOne({ _id: tiposId });
        res.status(200).send({ message: 'El tipo se ha eliminado correctamente', tipos: result });
    } catch (error) {
        res.status(400).send({ message: 'Error al eliminar el registro', error });
    }
}


module.exports = {
    getTipos,
    getByIdTipos,
    postTipos,
    putTipos,
    deleteTipos
}