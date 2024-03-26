const Media = require('../modulos/media')
const {response, request} = require('express')

const getMedia = async(req = request, res = response) => {
    try {
       const media = await Media.find();
        res.status(200).send({medias: media});
    } catch (error) {
        res.status(400).send("Errror al obtener el registro")
    } 
}

const getByIdMedia = async(req = request, res = response) => {
    try {
        const mediaId = req.params.id;
        const media = await Media.findById(mediaId);
        res.status(200).send({ media });
    } catch (error) {
        res.status(400).send({ message: 'Error al obtener el registro', error});
    }
}

const postMedia = async(req = request, res = response) => {
    try {
        const media = await Media.create(req.body);
        console.log(media);
        res.status(200).send({ message: 'La media se ha creado exitosamente', mediaCreada: media});
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el registro', error});
    }
}

const putMedia = async(req = request, res = response) => {
    try {
        const mediaId = req.params.id;
        const newData = req.body;
        const media = await Media.findById(mediaId);

        media.set(newData);
        await media.save();

        res.status(200).send({ message: 'La media se ha actualizado correctamente', mediaActualizada: media });
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar el registro', error});
    }
}
 const deleteMedia = async(req = request, res = response) => {
    try {
        const mediaId = req.params.id;
        const result = await Media.deleteOne({ _id: mediaId });
        res.status(200).send({ message: 'La media se ha eliminado exitosamente', media: result});
    } catch (error) {
        res.status(400).send({ message: 'Error al eliminar el degistro', error});
    }
 }


module.exports = {
    getMedia,
    getByIdMedia,
    postMedia,
    putMedia,
    deleteMedia
}