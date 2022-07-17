const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './env' });
const app = require('./app.js');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(con => {
    console.log(con.connections);
    console.log('DB connection successful!');
  })
  .catch(() => error => console.log(error.message));

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
