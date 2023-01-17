import {
    missingIngredientsBowlCakes,
    missingIngredientsArray,
    missingArray,
    completeBowlCakes,
  } from '../../utils/dispatchIngredients';
//   import { BowlCakeList } from '../../components/BowlCakeList';
import BowlCakeList from '../../components/BowlCakeList';
//   import Needed from '../../components/Available';

export default function Home ({listByBowlCake, setListByBowlCake}) {

    return <main>
        {/* <Available /> */}
        <BowlCakeList
          completeBowlCakes={completeBowlCakes}
          missingIngredientsArray={missingIngredientsArray}
          missingIngredientsBowlCakes={missingIngredientsBowlCakes}
          listByBowlCake={listByBowlCake}
          setListByBowlCake={setListByBowlCake}
          missingArray={missingArray}
        />
    </main>
}