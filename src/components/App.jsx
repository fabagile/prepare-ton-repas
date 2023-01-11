import { useState } from "react";

import {
  missingIngredientsBowlCakes,
  missingArray,
  completeBowlCakes,
} from "../utils/dispatchIngredients";

import "../styles/App.scss";
// import Available from "./Available";
import { BowlCakeList } from "./BowlCakeList";

function App() {
  const title = "Prépare ton repas";
  document.title = title;
  // cooks.map((cook) => console.table(cook.ingredients));
  const [toggle, setComplete] = useState(completeBowlCakes.length);
  function toggleComplete() {
    setComplete(!toggle);
    console.log(toggle);
  }

  return (
    <div className="App">
      <header>
        <h1>{title}</h1>
      </header>
      <main className="flex-stretch">
        {/* <Available /> */}
        <BowlCakeList
          toggle={toggle}
          setComplete={setComplete}
          completeBowlCakes={completeBowlCakes}
          missingIngredientsBowlCakes={missingIngredientsBowlCakes}
          missingArray={missingArray}
        />
      </main>
      <footer>
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
      </footer>
    </div>
  );
}

export default App;
