const express = require('express');
const router = express.Router();
const checkMail = require('../../middleware/users');
const userController = require('./controller');
const response = require('../../utils/response');

const registerAccount = async (req, res, next) => {
  const userData = req.body;

  try {
    const data = await userController.registerUser(userData);
    const info = {
      "id": data._id,
      "account": data.account,
      "name": data.name,
      "mail": data.mail
    };
    response.success(req, res, 'Cuenta creada', 201, info);
  } catch (error) {
    response.failed(req, res, 'Internal server', 500, error);
  }
}

router.post('/', checkMail, registerAccount);

module.exports = router;
