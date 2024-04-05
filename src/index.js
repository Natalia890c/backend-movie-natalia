const express = require('express');
const { default: mongoose } = require('mongoose');
require("dotenv").config();

//Exportacion de rutas
const generoRoutes = require('./routes/generos' );
const directorRoutes = require('./routes/directores');
const productoraRoutes = require('./routes/productoras');
const tipoRoutes = require('./routes/tipos');
const mediaRoutes = require('./routes/medias');

const app = express ();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api/generos', generoRoutes)
app.use('/api/directores', directorRoutes)
app.use('/api/productoras', productoraRoutes)
app.use('/api/medias', mediaRoutes)
app.use('/api/tipos', tipoRoutes)

//routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
}); 

//CONEXION MONGODB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connected to MongoDB atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));

