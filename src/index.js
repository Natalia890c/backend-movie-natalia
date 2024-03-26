const express = require('express');
const { default: mongoose } = require('mongoose');
require("dotenv").config();

//Exportacion de rutas
const generoRoutes = require('./routes/genero' );
const directorRoutes = require('./routes/director');
const productoraRoutes = require('./routes/productora');
const tipoRoutes = require('./routes/tipo');
const mediaRoutes = require('./routes/media');

const app = express ();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api', generoRoutes)
app.use('/api', directorRoutes)
app.use('/api', productoraRoutes)
app.use('/api', mediaRoutes)
app.use('/api', tipoRoutes)

//routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
}); 

//CONEXION MONGODB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connected to MongoDB atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));

