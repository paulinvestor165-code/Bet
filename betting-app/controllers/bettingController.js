const Bet = require('../models/Bet');
const User = require('../models/User');

exports.placeBet = async (req, res) => {
  const bet = new Bet(req.body);
  await bet.save();
  const user = await User.findById(req.body.userId);
  user.balance -= req.body.amount;
  await user.save();
  res.redirect('/betting');
};

exports.getBets = async (req, res) => {
  const bets = await Bet.find();
  res.render('index', { bets });
};
