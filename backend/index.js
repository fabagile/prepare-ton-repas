const mongoose = require("mongoose");
const ingredients = require("../src/data/detailledIngredients2.json");
// const { Ingredient } = require("./data/models/bowlCake.model");

const url =
  "mongodb+srv://fabagile:Marajade1@angular.alnwzpc.mongodb.net/cooking?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(url);

const ingredientSchema = new mongoose.Schema({
    name: String,
    category: String,
    available: {type: Boolean, default: true},
    quantity: {type: Number, default: 1}
})
const Ingredient = mongoose.model("Ingredient", ingredientSchema)

  ingredients.biscuits.map(({ name, available }) => {
    const newIngredient = new Ingredient({ name, category: "biscuits", available });
    // console.log(JSON.stringify(newIngredient, null, 2));
  
    newIngredient.save();
    console.log()
  });

}
// console.log(JSON.stringify(ingredients, null, 2))

/*
const express = require("express")

const app = express()


console.table (connection)
app.get("/", (req, res)=> {
    res.send(req.body)
})
// console.table(app)
app.listen("http://localhost:4000", ()=> console.log("ready")) */
