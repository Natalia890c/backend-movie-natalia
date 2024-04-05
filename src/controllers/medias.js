const Medias = require('../modulos/medias')
const {response, request} = require('express')

const getMedias = async(req = request, res = response) => {
    try {
       const medias = await Medias.find({estado:true});
        res.status(200).send(medias);
    } catch (error) {
        res.status(400).send("Errror al obtener el registro")
    } 
}

const getByIdMedias = async(req = request, res = response) => {
    try {
        const mediasId = req.params.id;
        const medias = await Medias.findById(mediasId);
        res.status(200).send({ medias });
    } catch (error) {
        res.status(400).send({ message: 'Error al obtener el registro', error});
    }
}

const postMedias = async(req = request, res = response) => {
    try {
        const medias = await Medias.create(req.body);
        console.log(medias);
        res.status(200).send({ message: 'La media se ha creado exitosamente', mediaCreada: medias});
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el registro', error});
    }
}

const putMedias = async(req = request, res = response) => {
    try {
        const mediasId = req.params.id;
        const newData = req.body;
        const medias = await Medias.findById(mediasId);
        newData.fechaActualizacion = new Date();
        medias.set(newData);
        await medias.save();

        res.status(200).send({ message: 'La media se ha actualizado correctamente', mediaActualizada: medias });
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar el registro', error});
    }
}
 const deleteMedias = async(req = request, res = response) => {
    try {
        const mediasId = req.params.id;
        const result = await Medias.deleteOne({ _id: mediasId });
        res.status(200).send({ message: 'La media se ha eliminado exitosamente', medias: result});
    } catch (error) {
        res.status(400).send({ message: 'Error al eliminar el degistro', error});
    }
 }


module.exports = {
    getMedias,
    getByIdMedias,
    postMedias,
    putMedias,
    deleteMedias
}