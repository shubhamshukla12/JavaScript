const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');

router.get('/register', (req, res) => {
  res.sendFile('register.html', { root: 'public' });
});
router.post('/register', registerController);

router.get('/login', (req, res) => {
  res.sendFile('login.html', { root: 'public' });
});
router.post('/login', loginController);

router.get('/dashboard', (req, res) => {
  res.sendFile('dashboard.html', { root: 'public' });
});

module.exports = router;
