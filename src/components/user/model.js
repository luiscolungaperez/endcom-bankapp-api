const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userModel = new Schema({
  _id: {type: Number, required: true},
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  mail: { type: String, required: true },
  account: { 
    type: String, 
    required: true, 
    maxlength: 11
  },
  balance: { type: Number, default: 1000 },
});



module.exports = mongoose.model('user-accounts', userModel);