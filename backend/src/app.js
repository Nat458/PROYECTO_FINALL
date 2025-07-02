// CARGA CORS Y LAS RUTAS DESDE ARCHIVOS SEPARADOS //

const express  = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require("cors");

// CARGA LAS RUTAS DE PRODUCTOS Y USUARIOS //

const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

// METODO PARA CONTECTAR MONGO //
connectDB();

// DEPENDENCIAS EXPRESS //
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

 

// LAS RUTAS SE GUARDARÁN EN UNA VARIABLE LLAMADA "APP" //
module.exports = app;