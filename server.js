
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const { PORT } = process.env;
const app = express();

app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/index.route'));

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Sms Campaign API');
});

app.listen(PORT || 3000, () => {
  console.log(`<::::Server is running on port ${PORT || 3000}::::>`);
});
