const Movement = require('./model');
const Account = require('../account/model');
const { zfill } = require('../../utils/zfill');
const { Promise } = require('mongoose');

const newMovement = ( dataMovement ) => {
  return new Promise(async (resolve, reject)=> {
    const consult = await Movement.findOne({}).sort({ _id: 'desc' });
    !consult
      ? ( dataMovement._id = 1 )
      : ( dataMovement._id = consult._id + 1 );

    dataMovement.movementCode = `M${zfill(dataMovement._id, 3)}`;
    
    Account.exists({ account: dataMovement.account },  async (err, doc) => {
      if(err) {
        reject('[Controller ERROR]: Account not exits ' + err);
      } else {
        const data = await Account.findOne({ account: dataMovement.account });
        if (data.balance >= dataMovement.amount) {
          const movement = new Movement( dataMovement );
          movement.save(async (error, newMovement) => {
            return error
              ? reject('[Controller ERROR]: New movement ' + error)
              : (
                  await Account.updateOne({ account: newMovement.account }, { $inc: { balance: -newMovement.amount }}),
                  resolve(newMovement)
                );
          });   
        } else {
          reject('balance insuficient');
        }
      }
    });
  });
};

const getMovements = ( userAccount ) => {
  return new Promise(async (resolve, reject) => {
    let newArray = [];
    const data = await Movement.find({ account: userAccount });
    data.map(item => {
      newArray = [
        ...newArray,
        {
          "id": item._id,
          "movementCode:": item.movementCode,
          "description": item.description,
          "amount": item.amount,
          "createDate": item.createDate
        }
      ]
    });

    !data
      ? reject('[Controller EROR]: Account not found')
      : resolve(newArray);
  })
}

module.exports = {
  newMovement,
  getMovements
};
