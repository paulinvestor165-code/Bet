const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new Schema({
  userId: String,
  amount: Number,
  outcome: String,
  status: String,
});

module.exports = mongoose.model('Bet', betSchema);
