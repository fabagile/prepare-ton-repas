import { detailledIngredients } from "../data/detailledIngredients";


const categories = detailledIngredients.reduce(
  (acc, { category }) => (acc.includes(category) ? acc : acc.concat(category)),
  []
);
categories.sort();

console.log(categories);
export {categories}