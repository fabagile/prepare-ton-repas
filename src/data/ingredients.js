import detailledIngredients from "./detailledIngredients.json";

export const ingredients = [
  ...detailledIngredients.fruits,
  ...detailledIngredients.légumes,
  ...detailledIngredients.laitiers,
  ...detailledIngredients.féculents,
  ...detailledIngredients.sauces,
  ...detailledIngredients.condiments,
  ...detailledIngredients.biscuits,
];
// export {ingredients}
