const express = require('express');
const multer = require('multer');
const path = require('path');
const whatsappRoutes = require('./routes/whatsappRoutes');

const app = express();
const PORT = 3000;

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Configuración de multer para subir CSV
const upload = multer({ dest: 'uploads/' });
app.use(upload.single('archivo'));

//rutas
app.use('/', whatsappRoutes);

//inicio de servidor
app.listen(PORT, () => {
    console.log(`Servidor web iniciado en http://localhost:${PORT}`);
});
