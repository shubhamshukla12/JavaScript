// const express = require('express');
// const passport = require('passport');
// const bodyParser = require('body-parser');
// const routes = require('./src/routes/routes');
// const config = require('./src/config/config');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const app = express();

// // Configure body-parser middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// // Set up routes
// app.use('/', routes);

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// // Passport serialization and deserialization functions
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// // Configure Google Strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: config.google.clientID,
//       clientSecret: config.google.clientSecret,
//       callbackURL: config.google.callbackURL
//     },
//     (accessToken, refreshToken, profile, done) => {
//       // You can save the user to the database or perform any necessary operations

//       return done(null, profile);
//     }
//   )
// );

// // Initialize passport and session middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Set up routes
// app.use('/', routes);

// // Create Google login route
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
//   res.redirect('/dashboard'); // Redirect to the dashboard page after successful authentication
// });

// // Server start
// const port = 8080;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });


const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt');
const routes = require('./src/routes/routes');
const config = require('./src/config/config');
const app = express();

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Add express-session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Passport serialization and deserialization functions
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Configure Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL
    },
    (accessToken, refreshToken, profile, done) => {
      // You can save the user to the database or perform any necessary operations

      return done(null, profile);
    }
  )
);

// Initialize passport and session middleware
app.use(passport.initialize());
app.use(passport.session());

// Set up routes
app.use('/', routes);

// Create Google login route
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/dashboard');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
