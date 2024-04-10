const express = require('express')
const session = require('express-session');
const app = express();
require('dotenv').config();
require('./middlewares/auth');
const passport = require('passport');
require('./db/db');
const cors = require('cors');

app.use(cors());
app.use(session({ secret: process.env.SECRET}));

app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>')
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
)

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure'
  })
)

app.get('/auth/failure', (req, res) => {
  res.send('something went wrong')
})

app.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
})

app.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.session.destroy();
    res.send('goodbye!');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Listening at port ${PORT}`)
})