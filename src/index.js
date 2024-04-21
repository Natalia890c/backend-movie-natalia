const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

//Exportacion de rutas
const generosRoutes = require('./routes/generos' );
const directoresRoutes = require('./routes/directores');
const productorasRoutes = require('./routes/productoras');
const tiposRoutes = require('./routes/tipos');
const mediasRoutes = require('./routes/medias');

const app = express();
const PORT = process.env.PORT || 9000;

// middleware
app.use(cors()); // Agregar middleware de CORS
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

app.listen(PORT, () => console.log('server listening on port', PORT));