const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  balance: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
