// models/Game.js
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  playerName: String,
  result: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Game', gameSchema);