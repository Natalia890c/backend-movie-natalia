const Medias = require('../modulos/medias')
const Generos = require('../modulos/generos')
const Tipos = require('../modulos/tipos')
const Directores = require('../modulos/directores')
const Productoras = require('../modulos/productoras')
const { response, request } = require('express')

const getMedias = async (req = request, res = response) => {
  try {
    const medias = await Medias.find();
    res.status(200).send(medias);
  } catch (error) {
    res.status(400).send("Errror al obtener el registro")
  }
}

const getByIdMedias = async (req = request, res = response) => {
  try {
    const mediasId = req.params.id;
    const medias = await Medias.findById(mediasId);
    res.status(200).send({ medias });
  } catch (error) {
    res.status(400).send({ message: 'Error al obtener el registro', error });
  }
}

const postMedias = async (req = request, res = response) => {
  try {

    const generoId = await Generos.findOne({ nombre: req.body.genero }).select('_id');
    const tipoId = await Tipos.findOne({ nombre: req.body.tipo }).select('_id');
    const directorId = await Directores.findOne({ nombre: req.body.director }).select('_id');
    const productoraId = await Productoras.findOne({ nombre: req.body.productora }).select('_id');

    const medias = await Medias.create({
      ...req.body,
      genero: generoId,
      tipo: tipoId,
      director: directorId,
      productora: productoraId,
  });
    console.log(medias);
    res.status(200).send({ message: 'La media se ha creado exitosamente', mediaCreada: medias });
  } catch (error) {
    res.status(400).send({ message: 'Error al crear el registro', error });
  }
}

const putMedias = async (req = request, res = response) => {
  try {
    const mediasId = req.params.id;
    const newData = req.body;

    // Obtener los IDs de los documentos relacionados
    const generoId = await Generos.findOne({ nombre: req.body.genero }).select('_id');
    const tipoId = await Tipos.findOne({ nombre: req.body.tipo }).select('_id');
    const directorId = await Directores.findOne({ nombre: req.body.director }).select('_id');
    const productoraId = await Productoras.findOne({ nombre: req.body.productora }).select('_id');

    // Actualizar el documento de medios con los nuevos datos
    const medias = await Medias.findByIdAndUpdate(
      mediasId,
      {
        ...newData,
        genero: generoId,
        tipo: tipoId,
        director: directorId,
        productora: productoraId,
        fechaActualizacion: new Date()
      },
      { new: true } // Para devolver el documento actualizado
    );

    res.status(200).send({ message: 'La media se ha actualizado correctamente', mediaActualizada: medias });
  } catch (error) {
    res.status(400).send({ message: 'Error al actualizar el registro', error });
  }
}

const deleteMedias = async (req = request, res = response) => {
  try {
    const mediasId = req.params.id;
    const result = await Medias.deleteOne({ _id: mediasId });
    res.status(200).send({ message: 'La media se ha eliminado exitosamente', medias: result });
  } catch (error) {
    res.status(400).send({ message: 'Error al eliminar el degistro', error });
  }
}


module.exports = {
  getMedias,
  getByIdMedias,
  postMedias,
  putMedias,
  deleteMedias
}