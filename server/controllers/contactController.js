const sgMail = require('@sendgrid/mail');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.contactus = catchAsync(async (req, res, next) => {
  const { email, name, inquiry } = req.body;
  console.log(req.body);

  const canSave = [name, email, inquiry].every(Boolean);

  if (canSave) {
    try {
      const message = `${name}, at ${email} has the following inquiry: ${inquiry}`;
      const subject = `${name} has an inquiry - Gotham Capital`;

      sgMail.send({
        To: process.env.MAIL_TO, // receiver email address
        from: process.env.MAIL_FROM,
        subject: subject,
        text: message,
      });
    } catch (err) {
      console.log(err);

      return next(
        new AppError('There was an error sending the email. Try again later!'),
        500
      );
    }
  } else {
    return next(new AppError('Please complete all required fields!', 400));
  }

  res.status(200).json({
    status: 'success',
    message: 'Contact Form Sent Successfully!',
  });
});
