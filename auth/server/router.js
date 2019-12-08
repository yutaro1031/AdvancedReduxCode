const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requierAuth = passport.authenticate('jwt', { session: false });
const requierSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requierAuth, function(req, res) {
    res.send({ hi: 'there' });
  });
  app.post('/signin', requierSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};
