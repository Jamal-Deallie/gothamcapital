const nodemailer = require('nodemailer');

const receiveEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: options.email,
    to: 'Gotham Capital Test <byanymeansdigital.test@gmail.com>',
    subject:` Inquiry from ${options.name}`,
    name: options.name,
    text: options.message,
    // html:
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = receiveEmail;
