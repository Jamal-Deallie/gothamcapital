const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Registration = require('../models/registrationModel');
const email = require('../utils/email');

exports.registration = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  const duplicate = await Registration.findOne({ email });

  if (duplicate) {
    return next(new AppError('You already registered', 401));
  }

  let newEmail;
  const message = 'Thank you for signing up for our newsletter.';
  try {
    newEmail = await Registration.create({
      email: req.body.email,
    });

    email({
      email: newEmail,
      subject: 'Gotham Capital Newsletter Confirmation',
      message: 'Thank you for signing up for our newsletter.',
    });

    res.status(200).json({
      status: 'success',
      message: message,
    });
  } catch (err) {
    console.log(err);
    newEmail.email = undefined;
  }
});
