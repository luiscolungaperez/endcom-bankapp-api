const express = require('express');
const router = express.Router();
const response = require('../../utils/response');

router.get('/', (req, res) => {
  console.log(req.headers);
  res.header({
    'custom-header': "Nuestro valor"
  });
  response.success(req, res, 'Lista de mensajes');
});

router.post('/', (req, res) => {
  console.log(req.query);
  if (req.query.error == 'ok') {
    response.failed(req, res, 'Error inesperado', 500, 'Es solo una simulaci{on de fallo');
  } else {
    response.success(req, res, 'Creado correctamente', 201);
  }
})

module.exports = router;
