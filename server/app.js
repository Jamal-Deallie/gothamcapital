const express = require('express');

const fundRouter = require('./routes/fundsRoutes');
const registrationRouter = require('./routes/registrationRoutes');
const contactRouter = require('./routes/contactRoutes');
const employeeRouter = require('./routes/employeeRoutes');
const cors = require('cors');
const AppError = require('./utils/appError');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();

// 1) MIDDLEWARES
app.use(express.json());
app.use(cors());

app.options('*', cors());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use(helmet());

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

app.use(mongoSanitize());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/test/v1/funds', fundRouter);
app.use('/api/test/v1/registration', registrationRouter);
app.use('/api/test/v1/employee', employeeRouter);
app.use('/api/test/v1/contactus', contactRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
