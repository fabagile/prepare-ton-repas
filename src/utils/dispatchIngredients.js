import { ingredients } from '../data/ingredients';
import { cooks } from '../data/cooks';

const missingArray = [];
let missingCounterStop = false;
const missingIngredientsArray = [];
cooks.map((cook, i) => {
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
    // console.log(`manquants: ${missingIngredients.join(', ')}`);
    cook.missing = missingIngredients;
    cook.missingNumber = missingIngredients.length;
    if (!missingArray.includes(missingIngredients.length))
      missingArray.push(missingIngredients.length);
  }
  if (i + 1 === cooks.length) {
    missingArray.sort();
    missingCounterStop = true;
    // console.log(missingArray)
  }
  return cooks;
});

if (missingCounterStop) {
  console.log(missingArray);
  // const missingIngredientsArray = []
  missingArray.map((val) => {
    console.log(val);
    const missingObject = { bowls: val };
    const bowlsArray = [];
    // console.log(missingObject, bowlsArray)
    cooks.map((cook) => {
      if (cook.missingNumber === val) {
        cook.missing.map(({ name }) => {
          if (!bowlsArray.includes(name)) bowlsArray.push(name);
          return bowlsArray;
        });
        bowlsArray.sort();

        return bowlsArray;
        // bowlsArray.push()
      }
      return bowlsArray;
    });
    missingObject.ingredients = bowlsArray;
    console.log(missingObject);
    missingIngredientsArray.push(missingObject);
  });
}

console.table(missingIngredientsArray);
// missingArray.sort();

const missingIngredientsBowlCakes = cooks.filter((cook) => cook.missing);
const completeBowlCakes = cooks.filter((cook) => cook.complete);

export {
  missingIngredientsBowlCakes,
  missingArray,
  completeBowlCakes,
  cooks,
  missingIngredientsArray,
};
