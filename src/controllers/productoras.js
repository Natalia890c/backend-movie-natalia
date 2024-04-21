const Productoras = require('../modulos/productoras')
const { request, response } = require ('express')

const getProductoras = async(req = request, res = response) => {
    try {
        const productoras = await Productoras.find()
        res.status(200).send( productoras );
    } catch (error) {
        res.status(400).send("Error al obtener el registro")
    }
}

const getByIdProductoras = async(req = request, res = response) => {
    try {
        const productorasId = req.params.id;
        const productoras = await Productoras.findById(productorasId);
        res.status(200).send({ productoras });
    } catch (error) {
        res.status(400).send({ message: 'Error al obtener el registro', error});
    }
}

const postProductoras = async (req = request, res = response) => {
    try {
        const productoras = await Productoras.create(req.body);
        console.log(productoras);
        res.status(200).send({ message: 'La productora se ha creado exitosamente', productoraCreada: productoras});
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el registro', error});
    }
}

const putProductoras = async (req = request, res = response) => {
    try {
        const productorasId = req.params.id;
        const newData = req.body; 
        const productoras = await Productoras.findById(productorasId);
        newData.fechaActualizacion = new Date();
        productoras.set(newData);
        await productoras.save();

        res.status(200).send({ message: 'La Productora se ha actualizado correctamente', productoraActualizadas: productoras });
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar el registro', error });
    }
}

const deleteProductoras = async(req = request, res = response) => {
    try {
        const productorasId = req.params.id;
        const result = await Productoras.deleteOne({ _id: productorasId });
        res.status(200).send({ message: 'La productora se ha eliminado correctamente', productoras: result });
    } catch (error) {
        res.status(400).send({ message: 'Error al eliminar el registro', error });
    }
}
    

module.exports = {
    getProductoras,
    getByIdProductoras,
    postProductoras,
    putProductoras,
    deleteProductoras
}