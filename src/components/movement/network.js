const express = require('express');
const router = express.Router();
const movementController = require('./controller');
const response = require('../../utils/response');

const newMovement = async (req, res) => {
  const dataMovement = req.body;
  try {
    await movementController.newMovement(dataMovement);
    response.success(req, res, 'Movement registered', 201);
  } catch (error) {
    console.log( + error);
    error === 'balance insuficient'
      ? response.failed(req, res, 'Balance insuficient', 400, error)
      : response.failed(req, res, 'Internal server', 500, error);
  }
}

router.post('/account/movement', newMovement);

module.exports = router;