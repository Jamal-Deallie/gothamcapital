const mongoose = require('mongoose');
const validator = require('validator');

const registrationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

const Registration = mongoose.model('Registration', registrationSchema);
module.exports = Registration;
