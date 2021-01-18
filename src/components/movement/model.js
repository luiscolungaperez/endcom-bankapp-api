const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movementModel = new Schema({
  _id: { type: Number, required: true },
  movementCode: { type: String, required: true },
  description: { type: String, default: '' },
  amount: { type: Number, required: true },
  account: { type: String, ref: 'user-accounts' ,maxlength: 11, required: true },
  createDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('movements', movementModel);
