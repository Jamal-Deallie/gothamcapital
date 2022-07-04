
const mongoose = require('mongoose');


const FundsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter the Merchant Name'],
  },
  ticker: {
    type: String,
    required: [true, 'Select the category'],
  },
  ytd: {
    type: Number,
    required: [true, 'The return stat is required'],
  },
  class: {
    type: String,
    required: [true, 'The return class is required'],
  },
  oneYear: {
    type: Number,
    required: false,
  },
  threeYear: {
    type: Number,
    required: false,
  },
  fiveYear: {
    type: Number,
    required: false,
  },
  tenYear: {
    type: Number,
    required: false,
  },
  incept: {
    type: Number,
    required: [true, 'The return stat is required'],
  },
  inceptDate: {
    type: Date,
    required: [true, 'Please Enter the Date of Transaction'],
  },
  netAssets: {
    type: String,
    required: [true, 'Net Assets are required'],
  },
  submittedDate: { type: Date, default: Date.now },
});

const Funds = mongoose.model('Funds', FundsSchema);

module.exports = Funds;
