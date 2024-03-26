const Productora = require('../modulos/productora')
const { request, response } = require ('express')

const getProductora = async(req = request, res = response) => {
    try {
        const productora = await Productora.find()
        res.status(200).send({ productoras: productora});
    } catch (error) {
        res.status(400).send("Error al obtener el registro")
    }
}

const getByIdProductora = async(req = request, res = response) => {
    try {
        const productoraId = req.params.id;
        const productora = await Productora.findById(productoraId);
        res.status(200).send({ productora });
    } catch (error) {
        res.status(400).send({ message: 'Error al obtener el registro', error});
    }
}

const postProductora = async (req = request, res = response) => {
    try {
        const productora = await Productora.create(req.body);
        console.log(productora);
        res.status(200).send({ message: 'La productora se ha creado exitosamente', productoraCreada: productora});
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el registro', error});
    }
}

const putProductora = async (req = request, res = response) => {
    try {
        const productoraId = req.params.id;
        const newData = req.body; 
        const productora = await Productora.findById(productoraId);

        productora.set(newData);
        await productora.save();

        res.status(200).send({ message: 'La Productora se ha actualizado correctamente', productorActualizada: productora });
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar el registro', error });
    }
}

const deleteProductora = async(req = request, res = response) => {
    try {
        const productoraId = req.params.id;
        const result = await Productora.deleteOne({ _id: productoraId });
        res.status(200).send({ message: 'La productora se ha eliminado correctamente', productora: result });
    } catch (error) {
        res.status(400).send({ message: 'Error al eliminar el registro', error });
    }
}
    

module.exports = {
    getProductora,
    getByIdProductora,
    postProductora,
    putProductora,
    deleteProductora
}