const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HighScores = new Schema({
  name:{
type: String
  },

  score:{
type:Number
  }
});

module.exports = HighScore = mongoose.model("HighScores", HighScores);
