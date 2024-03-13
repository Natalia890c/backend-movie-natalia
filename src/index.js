const express = require('express');
const { default: mongoose } = require('mongoose');
require("dotenv").config();

const generoRoutes = require('./routes/genero');
const directorRoutes = require('./routes/director');
const productoraRoutes = require('./routes/productora');
const tipoRoutes = require('./routes/tipo');
const mediaRoutes = require('./routes/media')

const app = express ();
const port = process.env.PORT || 9000;

app.use('/api', generoRoutes);
app.use('/api', directorRoutes);
app.use('/api', productoraRoutes);
app.use('/api', tipoRoutes);
app.use('/api', mediaRoutes)

//routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("connected to MongoDB atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));