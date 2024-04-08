require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const donacionRoutes = require('./routes/donacionRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/donaciones', donacionRoutes);
this.donacionesPath = 'API_donacion/donaciones';

PORT = 3000;

mongoose.connect('mongodb+srv://aleison1:fundacion2@donaciones.vbxzfjp.mongodb.net/?retryWrites=true&w=majority&appName=Donaciones', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch(error => {
  console.error('Error de conexión a la base de datos:', error);
});