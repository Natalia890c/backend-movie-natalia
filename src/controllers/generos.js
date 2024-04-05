const Generos = require('../modulos/generos')
const { request, response } = require('express')

const getGeneros = async (req = request, res = response) => {
    try {
        const generos = await Generos.find({estado:true})
        res.status(200).send(generos);
    } catch (error) {
        res.status(400).send("Error al obtener el registro")
    }
}

const getByIdGeneros = async (req = request, res = response) => {
    try {
        const generosId = req.params.id;
        const generos = await Generos.findById(generosId);
        res.status(200).send({ generos });
    } catch (error) {
        res.status(400).send({ message: 'Error al obtener el registro', error });
    }
}

const postGeneros = async (req = request, res = response) => {
    try {
        const generos = await Generos.create(req.body);
        console.log(generos);
        res.status(200).send({ message: 'El género se ha creado correctamente', generosCreado: generos });
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el registro', error });
    }
}

const putGeneros = async (req = request, res = response) => {
    try {
        const generosId = req.params.id;
        let newData = req.body; 
        const generos = await Generos.findById(generosId);
        newData.fechaActualizacion = new Date();
        generos.set(newData);
        await generos.save();

        res.status(200).send({ message: 'El género se ha actualizado correctamente', generosActualizado: generos });
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar el registro', error });
    }
}

const deleteGeneros = async (req = request, res = response) => {
    try {
        const generosId = req.params.id;
        const result = await Generos.deleteOne({ _id: generosId });
        res.status(200).send({ message: 'El género se ha eliminado correctamente', generos: result });
    } catch (error) {
        res.status(400).send({ message: 'Error al eliminar el registro', error });
    }
}


module.exports = {
    getGeneros,
    postGeneros,
    getByIdGeneros,
    putGeneros,
    deleteGeneros
}