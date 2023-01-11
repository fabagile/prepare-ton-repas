import { ingredients } from "../data/ingredients";
import { cooks } from "../data/cooks";

const missingArray = [];
  cooks.map((cook) => {
    /* 
    logique: Si chacun des éléments du plat est compris dans la liste des ingrédients, remplir la condition cook.complete
    */
    const includesIngredients = cook.ingredients.every((ing) =>
      ingredients.includes(ing.name)
    );

    if (includesIngredients) {
      cook.complete = true;
    } else {
      const missingIngredients = cook.ingredients.filter(
        (ing) => !ingredients.includes(ing.name)
      );
      console.log(`manquants: ${missingIngredients.join(", ")}`);
      cook.missing = missingIngredients;
      cook.missingNumber = missingIngredients.length;
      if (!missingArray.includes(missingIngredients.length))
        missingArray.push(missingIngredients.length);
    }

    return cooks;
  });

  
  missingArray.sort();
  
  const missingIngredientsBowlCakes = cooks.filter((cook) => cook.missing);
  const completeBowlCakes = cooks.filter((cook) => cook.complete);

  export {missingIngredientsBowlCakes, missingArray, completeBowlCakes, cooks}
    
