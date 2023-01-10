import detailledIngredients from "./detailledIngredients.json";

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
