const express = require('express');
const router = express.Router();
const checkMail = require('../../middleware/users');
const userController = require('./controller');
const response = require('../../utils/response');

const registerAccount = async (req, res) => {
  const userData = req.body;

  try {
    const data = await userController.registerUser(userData);
    const info = {
      "id": data._id,
      "account": data.account,
      "name": data.name,
      "mail": data.mail
    };
    response.success(req, res, 'Account created', 201, info);
  } catch (error) {
    response.failed(req, res, 'Internal server', 500, error);
  }
}

const addBalance = async (req, res) => {
  const userBalance = req.body;
  try {
    const data = await userController.addBalance(userBalance);
    const info = {
      "balance": data + userBalance.balance
    };
    response.success(req, res, 'Updated balance', 200, info);
  } catch (error) {
    response.failed(req, res, 'Internal server', 500, error);
  }
};

const getAccount = async (req, res) => {
  const account = req.params.account;
  try {
    const data = await userController.getAccount(account);
    const info = {
      id: data._id,
      account: data.account,
      balance: data.balance,
      name: data.name,
      mail: data.mail
    };
    response.success(req, res, 'Account info', 200, info);
  } catch (error) {
    response.failed(req, res, 'Internal server', 500, error);
  }
}

router.post('/create-account', checkMail, registerAccount);
router.put('/account', addBalance);
router.get('/account/:account', getAccount);

module.exports = router;
