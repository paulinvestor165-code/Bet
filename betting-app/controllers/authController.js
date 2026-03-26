const User = require('../models/User');

exports.signup = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.redirect('/auth/login');
};

exports.login = async (req, res) => {
  const user = await User.findOne(req.body);
  if (user) {
    res.redirect('/betting');
  } else {
    res.redirect('/auth/signup');
  }
};
