import { detailledIngredients } from "../data/detailledIngredients";
import {categories} from "./categorizeIngredients"

// }
const sortedIngredients = categories.map((cat) => {
  const filterByName = detailledIngredients.filter(
    ({ category }) => cat === category
  );

  return filterByName;
});

// console.log(JSON.stringify(sortedIngredients, null, 2));

// export{}
export {sortedIngredients}