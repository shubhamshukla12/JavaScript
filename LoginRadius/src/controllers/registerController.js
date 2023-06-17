const bcrypt = require('bcrypt');
const registerController = (req, res) => {
    const { firstName, dob, phoneNumber, email, salesforceId, password } = req.body;
  
    // Generate a salt and hash the password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        // Store the user details and hashed password in the database
        // Replace this with your own code to save the user details
  
        // Redirect to the login page after successful registration
        res.redirect('/login');
      });
    });
  };
  
  module.exports = registerController;
  