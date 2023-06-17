// const LocalStrategy = require('passport-local').Strategy;
// const User = require('../models/User');

// passport.use(
//     new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
//       try {
//         const user = await User.findOne({ email });
//         if (!user) {
//           return done(null, false, { message: 'Incorrect email or password' });
//         }
  
//         const isMatch = await user.comparePassword(password);
//         if (isMatch) {
//           return done(null, user);
//         } else {
//           return done(null, false, { message: 'Incorrect email or password' });
//         }
//       } catch (err) {
//         return done(err);
//       }
//     })
//   );

// passport.use(new LocalStrategy({ ... }, async (email, password, done) => { ... }));
// passport.use(new GoogleStrategy({ ... }, async (accessToken, refreshToken, profile, done) => { ... }));
