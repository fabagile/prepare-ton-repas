const mongoose = require("mongoose");

const bowlCakeSchema = new mongoose.Schema({
  name: String,
  page: Number,
  ingredients: [{ name: String, quantity: Number, quality: String }],
  durations: {
    preparation: Number,
    cooking: Number,
  },
  recipe: [String]

});

const BowlCake = mongoose.model("BowlCake", bowlCakeSchema);
module.exports = {BowlCake}
