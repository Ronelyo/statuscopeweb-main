const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('./server');  // Assuming your User model is exported from your server file

module.exports = function(passport) {
  passport.use(new LocalStrategy(
    async (username, password, done) => {
      const user = await User.findOne({ username });
      if (!user) return done(null, false);
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
};
