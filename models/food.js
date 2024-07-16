// models/fruit.js

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});

module.exports= mongoose.model("Food", foodSchema); // create model
