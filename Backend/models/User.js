const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  dob: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  salesforceId: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
