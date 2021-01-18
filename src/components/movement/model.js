const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timestamp = new Date(Date.now());

const movementModel = new Schema({
  _id: { type: Number, required: true },
  movementCode: { type: String, required: true },
  description: { type: String, default: '' },
  amount: { type: Number, required: true },
  account: { type: String, ref: 'user-accounts' ,maxlength: 11, required: true },
  createDate: { type: Date, default: timestamp }
});

module.exports = mongoose.model('movements', movementModel);
