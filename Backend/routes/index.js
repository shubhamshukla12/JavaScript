const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  const { firstName, dob, phoneNumber, email, salesforceId, password } = req.body;
  
  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create a new user
    const newUser = new User({
      firstName,
      dob,
      phoneNumber,
      email,
      salesforceId,
      password,
    });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUser.password, salt);
    newUser.password = hashedPassword;

    // Save the user to the database
    await newUser.save();
    res.status(200).json({ message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json({ message: 'Login successful' });
});

// Google login route
router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Redirect or respond with success message
  res.redirect('/dashboard');
});

module.exports = router;
