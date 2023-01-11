import { useState } from "react";

import {
  missingIngredientsBowlCakes,
  missingArray,
  completeBowlCakes,
} from "../utils/dispatchIngredients";
import Complete from "./Complete";
import Missing from "./Missing";

export const BowlCakeList = () => {
  const [toggle, setComplete] = useState(completeBowlCakes.length);
  function toggleComplete() {
    setComplete(!toggle);
    console.log(toggle);
  }
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
        <Missing
          toggle={missingIngredientsBowlCakes.length}
          bowlCakes={missingIngredientsBowlCakes}
          missingArray={missingArray}
        />
      </div>

      {completeBowlCakes.length ? (
        <button
          onClick={toggleComplete}
          className={
            !toggle && completeBowlCakes.length ? "bg-green" : "bg-warning"
          }
        >
          Voir les {!toggle ? "complets" : "manquants"}
        </button>
      ) : (
        <button disabled className="disabled">
          Voir les complets
        </button>
      )}
    </section>
  );
};
