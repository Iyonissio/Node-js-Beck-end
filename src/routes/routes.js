const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

router.post('/usuarios', UsuarioController.Insert);

module.exports = router;