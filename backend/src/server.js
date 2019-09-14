const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('../../config/keys.js').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
// eslint-disable-next-line no-console
  .then(() => console.log('MongoDB connected'))
// eslint-disable-next-line no-console
  .catch((e) => console.log("** Don't forget to whitelist this IP **", e));

// Passport middleware
app.use(passport.initialize());
require('./passport')(passport);
// Routes
app.use('/api/users', users);


// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server up on port ${port}!`));
