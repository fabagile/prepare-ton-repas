 import {
  useState,

} from "react";
import { cooks } from "../data/cooks";
import { ingredients } from "../data/ingredients";
import Complete from "./Complete";
import Missing from "./Missing";

export const BowlCakeList = () => {
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

  // completeBowlCakes.map((cook) => console.table(cook.ingredients));

  // Basculer le type de liste
  const [toggle, setToggle] = useState(true);
  function triggerToggle() {
    setToggle(!toggle);
    console.log(toggle);
  }

  // choix du bowl cake
  // const [showBowlCake, setshowBowlCake] = useState(false);
  // function triggerShowBowlCake() {
  //   setshowBowlCake(!showBowlCake);
  //   console.log(showBowlCake);
  // }

  return (
    <section id="bowlcake-list">
      <h2>Bowl Cakes</h2>
      <div className="flex-stretch">
      <Complete toggle={toggle} bowlCakes={completeBowlCakes} />
      <Missing toggle={toggle}
        bowlCakes={missingIngredientsBowlCakes}
        missingArray={missingArray}
        />
        </div>
        
        {completeBowlCakes.length && missingIngredientsBowlCakes.length ? (
          <button
            onClick={triggerToggle}
            className={!toggle ? "bg-green" : "bg-warning"}
          >
            Voir les {!toggle ? "complets" : "manquants"}
          </button>
        ) : null}
    </section>
  );
};
