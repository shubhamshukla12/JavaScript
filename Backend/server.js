const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const keys = require('./config/keys');
const User = require('./models/User');
require('./config/passport-setup')(passport);

const app = express();

// Middleware configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Database connection
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Routes
const routes = require('./routes/index');
app.use('/', routes);

// Server start
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
