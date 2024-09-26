require('dotenv').config();
const express = require('express'); // Corrige el typo de epxress a express
const cors = require('cors');
const app = express();
const { dbConnect } = require('./config/mongo');

const PORT = process.env.PORT || 3000;

// Configuración de CORS
const corsOptions = {
    origin: 'https://angularfy-app.netlify.app', // Cambia esto a la URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

// Usa el middleware CORS con las opciones configuradas
app.use(cors(corsOptions));
app.use(express.json()); // Corrige el typo de epxress a express
app.use(express.static('public')); // Corrige el typo de epxress a express
app.use('/api/1.0', require('./app/routes'));

app.listen(PORT, () => {
    console.log(`Tu API es https://api-angularfy.vercel.app:${PORT}/api/1.0`);
});
