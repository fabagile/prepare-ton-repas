import { cooks } from "../data/cooks";
import { ingredients } from "../data/ingredients";
import Tile from "./UI/Tile";

export const Dishes = () => {
  cooks.map((cook) => {
    // console.log(cook.ingredients)
    
    /* 
    logique: Si chacun des éléments du plat est compris dans la liste des ingrédients, remplir la condition cook.complete
    */
   const includesIngredients = cook.ingredients.every(ing=> ingredients.includes(ing))
   console.log(includesIngredients)
   if (includesIngredients) cook.complete = true




    // if(cook.ingredients.every(ing=>ingredients.includes(ing))) cook.complete=true

    // cook.ingredients.map(ing => {
    //   const isInList = ing.includes()
    //     if (ingredients.every()) return false
    //     cook.complete=true
    //     return ing
        
    // })
    return cook
});
  return (
    <div>
      <h2>Plats</h2>
      <div className="tiles">
        {cooks.map(
          (cook, i) =>  (
            <div  key={i}>

            <Tile className={cook.complete ? 'green': "orangered"} title={cook.name} list={cook.ingredients} />
            </div>
          )

          // </div>
        )}
      </div>
    </div>
  );
};
