// const jwt = require('jsonwebtoken');
const User = require('./model');
const { zfill, randomNumber} = require('../../utils/zfill');

const registerUser = ( userData ) => {
  return new Promise((resolve, reject) => {

    User.findOne({})
      .sort({ _id: 'desc' })
      .then(consult => {

        userData._id = consult._id + 1;
        userData.account = randomNumber() + zfill(userData._id, 3);
        
        //build user Schema
        const user = new User(userData);
    
        // Add new userAccount
        user.save((error, newUser) => {
          return error 
            ? reject('[Controller ERROR ]: On save, ' + error)
            : resolve(newUser);
        });
      });
  });
};

module.exports = {
  registerUser
};
