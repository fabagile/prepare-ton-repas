const mongoose = require("mongoose")

const ingredientSchema = new mongoose.Schema({
    name: String,
    category: String,
    available: {type: Boolean, default: true},
    quantity: {type: Number, default: 1}
})
const Ingredient = mongoose.model("Ingredient", ingredientSchema)

module.exports = {Ingredient}