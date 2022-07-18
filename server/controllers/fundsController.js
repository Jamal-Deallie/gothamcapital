const factory = require('./handlerFactory');
const Funds = require('../models/fundModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');
// exports.getAllFunds = factory.getAll(Funds);

exports.getAllFunds = factory.getAll(Funds);

exports.getFund = factory.getOne(Funds);
exports.createFunds = factory.createOne(Funds);

exports.updateFund = factory.updateOne(Funds);
exports.deleteFund = factory.deleteOne(Funds);

exports.getFundsBySearch = catchAsync(async (req, res) => {
  const { searchQuery } = req.query;
  console.log(searchQuery);
  try {
    const term = new RegExp(searchQuery, 'i');

    const funds = await Funds.find({
      $and: [{ $or: [{ name: term }, { ticker: term }] }],
    });

    
    const doc = funds;
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc,
      },
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
