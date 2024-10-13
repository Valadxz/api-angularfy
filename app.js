require('dotenv').config();
const express = require('express'); // Corregido "epxress" a "express"
const cors = require('cors');
const app = express();
const { dbConnect } = require('./config/mongo');

const PORT = process.env.PORT || 10000;

// Configuración de CORS
app.use(cors({
  origin: 'https://angularfy-app.netlify.app', // Permite este dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'custom_header'], // Agrega custom_header aquí
}));

app.use(express.json()); // Corregido "epxress" a "express"
app.use(express.static('public')); // Corregido "epxress" a "express"
app.use('/api/1.0', require('./app/routes'));

app.listen(PORT, () => {
    console.log(`Tu API está corriendo en https://api-angularfy.onrender.com:${PORT}/api/1.0`);
});
