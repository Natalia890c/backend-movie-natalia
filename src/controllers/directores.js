const Directores = require('../modulos/directores')
const { request, response } = require('express')

const getDirectores = async(req = request, res = response) => {
    try {
       const directores = await Directores.find({estado:true})
       res.status(200).send(directores);
    } catch (error) {
        res.status(400).send("Error al obtener el registro")
    }
}

const getByIdDirectores = async(req = request, res = response) => {
    try {
        const directoresId = req.params.id;
        const directores = await Directores.findById (directoresId);
        res.status(200).send({ directores});
    } catch (error) {
        res.status(400).send({ message: 'Error al obtener el registro', error});
    }
}

const postDirectores = async (req = request, res = response) => {
    try {
        const directores = await Directores.create(req.body); 
        console.log(directores);
        res.status(200).send({ message: 'El director se ha creado exitosamente', directoresCreado: directores});
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el registro', error});
    }
}

const putDirectores = async (req = request, res = response) => {
    try {
        const directoresId = req.params.id;
        const newData = req.body; 
        const directores = await Directores.findById(directoresId);
        newData.fechaActualizacion = new Date();
        directores.set(newData);
        await directores.save();

        res.status(200).send({ message: 'El director se ha actualizado correctamente', directoresActualizados: directores });
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar el registro', error });
    }
}

const deleteDirectores = async (req = request, res = response) => {
    try {
        const directoresId = req.params.id;
        const result = await Director.deleteOne({ _id: directoresId });
        res.status(200).send({ message: 'El director se ha eliminado correctamente', directores: result });
    } catch (error) {
        res.status(400).send({ message: 'Error al eliminar el registro', error });
    }
}

module.exports = {
    getDirectores,
    getByIdDirectores,
    postDirectores,
    putDirectores,
    deleteDirectores
}
