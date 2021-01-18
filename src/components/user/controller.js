// const jwt = require('jsonwebtoken');
const User = require('./model');
const { zfill, randomNumber} = require('../../utils/zfill');

const registerUser = ( userData ) => {
  return new Promise((resolve, reject) => {
    User.findOne({})
      .sort({ _id: 'desc' })
      .then(consult => {
        !consult
          ? ( userData._id = 1) 
          : (userData._id = consult._id + 1);

        userData.account = randomNumber() + zfill(userData._id, 3);
        
        const user = new User(userData);
        user.save((error, newUser) => {
          return error 
            ? reject('[Controller ERROR ]: On save, ' + error)
            : resolve(newUser);
        });
      });
  });
};

const addBalance = ( userBalance ) => {
  return new Promise( (resolve, reject) => {
    const filter = { account: userBalance.account };
        
    User.findOne(filter)
      .then(async (result) => {

        if (!result) {
          reject('[Controller ERROR ]: On updated, ' + 'Account not exits');
        }

        const accountAltered = await User.updateOne(filter, { $inc: { balance: userBalance.balance }});

        if (accountAltered.nModified > 0) {
          resolve(result.balance);
        } else {
          reject('[Controller ERROR]: On updated ' + 'no mofidify');
        }
      })
  })
}

const getAccount = ( account ) => {
  return new Promise((resolve, reject) => {
    User.findOne({ account: account })
      .then(async (result) => {
        !result
          ? reject('[Controller ERROR]: Get account ' + 'Not found')
          : resolve(result);
      })
  });
};

module.exports = {
  registerUser,
  addBalance,
  getAccount
};
