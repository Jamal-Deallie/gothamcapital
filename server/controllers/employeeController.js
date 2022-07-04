const factory = require('./handlerFactory');
const Employee = require('../models/employeeModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
// exports.getAllFunds = factory.getAll(Funds);

exports.getAllEmployees = factory.getAll(Employee);

exports.getEmployee = factory.getOne(Employee);
exports.createEmployee = factory.createOne(Employee);

exports.updateEmployee = factory.updateOne(Employee);
exports.deleteEmployee = factory.deleteOne(Employee);

exports.getEmployeesBySearch = catchAsync(async (req, res) => {
  const { term } = req.query;
  console.log(term);
  try {
    const query = new RegExp(term, 'i');

    const employee = await Employee.find({
      $and: [{ $or: [{ name: query }, { department: query }] }],
    });

    const doc = employee;
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
