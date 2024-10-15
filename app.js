require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { dbConnect } = require('./config/mongo');

const PORT = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors({
  origin: 'https://angularfy-app.vercel.app', // Permite este dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'custom_header'], // Agrega custom_header aquí si lo usas
}));

// Permitir el uso de iframes desde un dominio específico
app.use((req, res, next) => {
    res.setHeader('X-Frame-Options', 'ALLOW-FROM https://portfolio-iota-coral-38.vercel.app'); // Cambia 'tu-dominio.com' por el dominio donde se cargará el iframe
    res.setHeader("Content-Security-Policy", "frame-ancestors 'self' https://portfolio-iota-coral-38.vercel.app"); // Cambia 'tu-dominio.com' por el dominio donde se cargará el iframe
    next();
});

app.use(express.json());
app.use(express.static('public'));
app.use('/api/1.0', require('./app/routes'));

app.listen(PORT, () => {
    console.log(`Tu API está corriendo en el puerto ${PORT}`);
});
