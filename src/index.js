const express = require('express');
const { default: mongoose } = require('mongoose');
require("dotenv").config();

//Exportacion de rutas
const generosRoutes = require('./routes/generos' );
const directoresRoutes = require('./routes/directores');
const productorasRoutes = require('./routes/productoras');
const tiposRoutes = require('./routes/tipos');
const mediasRoutes = require('./routes/medias');

const app = express ();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api/generos', generosRoutes)
app.use('/api/directores', directoresRoutes)
app.use('/api/productoras', productorasRoutes)
app.use('/api/medias', mediasRoutes)
app.use('/api/tipos', tiposRoutes)

//routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
}); 

//CONEXION MONGODB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connected to MongoDB atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));

