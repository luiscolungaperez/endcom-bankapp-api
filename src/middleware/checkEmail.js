const User = require('../components/account/model');
const response = require('../utils/response');

const checkMail = (req, res, next) => {
  try {
    User.exists({ mail: req.body.mail }, (error, data) => {
      if (error) {
        console.log('User register');
        return reject('[Middleware ERROR]: ' + error);
      } else if (data) {
        return response.failed(req, res, 'User registered', 400, data);
      }
      next();
    })
  } catch (error) {
    console.error('[Middleware ERROR]: ' + error);
  }
}


module.exports = checkMail;