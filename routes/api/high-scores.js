const express = require("express");
const router = express.Router();

// Load Game model
const highScores = require("../../models/high-scores")

router.post("/", (req, res) => {

  highScores.create( req.body ).then(highScores => {
    res.json(highScores);
  });
});

router.get("/", (req, res) => {
 
  highScores.find({}).then(highScores => {
    res.json({ highScores });
  });
});


module.exports = router;
