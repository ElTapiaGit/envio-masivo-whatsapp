const express = require('express');
const router = express.Router();
const {
    getQR,
    getEstadoSesion,
    cerrarSesion,
    enviarMensajes,
} = require('../controllers/whatsappController');

//enpoints
router.get('/qr', getQR);

router.get('/estado-sesion', getEstadoSesion);

router.post('/logout', cerrarSesion);

router.post('/enviar', enviarMensajes);

module.exports = router;