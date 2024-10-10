require('dotenv').config();
const express = require('express'); // Corrige el typo de epxress a express
const cors = require('cors');
const app = express();
const { dbConnect } = require('./config/mongo');

const PORT = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors({
  origin: 'https://angularfy-app.netlify.app', // Permite este dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'custom_header'], // Agrega custom_header aquí
}));

app.use(express.json()); // Corrige el typo de epxress a express
app.use(express.static('public')); // Corrige el typo de epxress a express
app.use('/api/1.0', require('./app/routes'));

app.listen(PORT, () => {
    console.log(`Tu API es https://api-angularfy.vercel.app:${PORT}/api/1.0`);
});
