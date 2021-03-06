const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY); //your sendgrid api key

exports.email = (email, message, subject) => {
  console.log({ email, message, subject });
  sgMail.send({
    To: email, // receiver email address
    from: process.env.MAIL_FROM,
    subject: subject,
    text: message,
  });
};
