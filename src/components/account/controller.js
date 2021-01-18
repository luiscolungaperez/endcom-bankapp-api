const axios = require('axios');
const Account = require('./model');
const { zfill } = require('../../utils/zfill');

const registerUser = ( userData ) => {
  return new Promise(async (resolve, reject) => {
    const {data} = await axios.post('https://60005b36cb21e10017af8d5b.mockapi.io/api/v1/account', userData);
    
    userData._id = parseInt(data.id, 10);
    userData.account = data.account + zfill(data.id, 3);
    
    const account = new Account(userData);
    account.save((error, newUser) => {
      return error 
        ? reject('[Controller ERROR]: On save, ' + error)
        : resolve(newUser);
    });
  });
};

const addBalance = ( userBalance ) => {
  return new Promise(async (resolve, reject) => {
    const filter = { account: userBalance.account };   
    const result = await Account.findOne(filter);

    if (!result) {
      reject('[Controller ERROR ]: On updated, ' + 'Account not exits');
    }

    const accountAltered = await Account.updateOne(filter, { $inc: { balance: userBalance.balance }});

    if (accountAltered.nModified > 0) {
      resolve(result.balance);
    } else {
      reject('[Controller ERROR]: On updated ' + 'no mofidify');
    }
  });
}

const getAccount = ( account ) => {
  return new Promise(async (resolve, reject) => {
    const result = await Account.findOne({ account: account })
    !result
      ? reject('[Controller ERROR]: Get account ' + 'Not found')
      : resolve(result);
  });
};

module.exports = {
  registerUser,
  addBalance,
  getAccount
};
