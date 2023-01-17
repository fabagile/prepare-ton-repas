import detailledIngredients from "./detailledIngredients.json";

console.log(JSON.stringify(detailledIngredients, null, 2))
// console.log(JSON.stringify(detailledIngredients, null, 2))

export const ingredients = [
  ...detailledIngredients.fruits,
  ...detailledIngredients.légumes,
  ...detailledIngredients.laitiers,
  ...detailledIngredients.protéines,
  ...detailledIngredients.féculents,
  ...detailledIngredients.sauces,
  ...detailledIngredients.biscuits,
  ...detailledIngredients.condiments,
  ...detailledIngredients.desserts,
];
// export {ingredients}
