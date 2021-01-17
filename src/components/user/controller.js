// const jwt = require('jsonwebtoken');
const User = require('./model');
const { zfill, randomNumber} = require('../../utils/zfill');

const registerUser = ( userData ) => {
  return new Promise(async (resolve, reject) => {
    userData.account = randomNumber();
    //build user Schema
    const user = new User(userData);
    // Add new userAccount
    user.save((error, newUser) => {
      return error 
        ? reject('[Controller ERROR ]: On save, ' + error)
        : resolve(newUser);
    });
  });
};

module.exports = {
  registerUser
};
