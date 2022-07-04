const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "'The employee's name is required'"],
  },
  department: {
    type: String,
    enum: [
      'Investment Management',
      'Operations',
      'Human Capital',
      'Information Technology',
      'Sales',
      'Marketing',
      'Investment Research',
    ],
    required: [true, "'The employee's department is required'"],
  },
  Image: {
    type: String,
    required: [true, "'The employee's image is required'"],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
