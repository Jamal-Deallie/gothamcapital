const dotenv = require('dotenv');
require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConn');
const fundRouter = require('./routes/fundsRoutes');
const registrationRouter = require('./routes/registrationRoutes');
const contactRouter = require('./routes/contactRoutes');
const employeeRouter = require('./routes/employeeRoutes');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const app = express();
const cors = require('cors');
const xss = require('xss-clean');

connectDB();

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb' }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());

app.use((req, res, next) => {
  console.log('middleware check');
  next();
});

app.use('/api/test/v1/funds', fundRouter);
app.use('/api/test/v1/registration', registrationRouter);
app.use('/api/test/v1/employee', employeeRouter);
app.use('/api/test/v1/contactus', contactRouter);

app.get('/', function (req, res) {
  res.send({ status: 'success' });
});

const port = process.env.PORT || 5001;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
