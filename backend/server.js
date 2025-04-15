const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 👉 Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, 'public')));

// 👉 Rutas API
app.use('/api', routes);

// 👉 Si alguien accede a "/", devuelve index.html automáticamente
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

