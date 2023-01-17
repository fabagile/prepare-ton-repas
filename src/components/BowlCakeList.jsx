import Complete from './Complete';
import Missing from './Missing';
import MissingIngredients from './MissingIngredients';
// import { connectDB } from "../utils/connectDB";

export default function BowlCakeList({
  missingIngredientsBowlCakes,
  missingIngredientsArray,
  missingArray,
  completeBowlCakes,
  listByBowlCake,
  setListByBowlCake,
}) {
  // const disabled =

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
        <Complete
          toggle={completeBowlCakes.length}
          bowlCakes={completeBowlCakes}
        />
        {listByBowlCake ? (
          <Missing
            toggle={missingIngredientsBowlCakes.length}
            bowlCakes={missingIngredientsBowlCakes}
            missingArray={missingArray}
          />
        ) : (
          <MissingIngredients
            toggle={missingIngredientsArray.length}
            list={missingIngredientsArray}
            missingArray={missingArray}
          />
        )}
      </div>
    </section>
  );
}
