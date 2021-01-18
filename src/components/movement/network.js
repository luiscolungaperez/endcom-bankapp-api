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
    error === 'balance insuficient'
      ? response.failed(req, res, 'Balance insuficient', 400, error)
      : response.failed(req, res, 'Internal server', 500, error);
  }
}

const getMovements = async (req, res) => {
  const account = req.params.account;
  try {
    const data = await movementController.getMovements(account);
    const info = {"account": account, "movements": data }
    response.success(req, res, 'Account movements', 200, info);
  } catch (error) {
    response.failed(req, res, 'Internal server', 500, error);
  }
}

router.post('/account/movement', newMovement);
router.get('/account/movements/:account', getMovements);

module.exports = router;