const Promise = require('bluebird');
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  game: String,
  stime: String,
  situation: String,
  relay: String,
  homeTeam: {
    type: String,
    required: true
  },
  score: String,
  visitor: {
    type: String,
    required: true
  },
  overall: String
});
module.exports = mongoose.model('Game', GameSchema);
