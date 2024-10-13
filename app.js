require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { dbConnect } = require('./config/mongo');

const PORT = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors({
  origin: 'https://angularfy-app.netlify.app', // Permite este dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'custom_header'], // Agrega custom_header aquí si lo usas
}));

app.use(express.json());
app.use(express.static('public'));
app.use('/api/1.0', require('./app/routes'));

app.listen(PORT, () => {
    console.log(`Tu API está corriendo en el puerto ${PORT}`);
});
