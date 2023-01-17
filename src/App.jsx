import { useState } from 'react';

import {
  missingIngredientsBowlCakes,
  missingIngredientsArray,
  missingArray,
  completeBowlCakes,
} from './utils/dispatchIngredients';

import './styles/App.scss';
// import Available from "./Available";
import { BowlCakeList } from './components/BowlCakeList';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Home from './pages/Home';

function App() {
  const title = 'Prépare ton repas';
  document.title = title;
  // cooks.map((cook) => console.table(cook.ingredients));
  const [toggle, setComplete] = useState(completeBowlCakes.length);
  const [listByBowlCake, setListByBowlCake] = useState(false);
  function toggleComplete() {
    setComplete(!toggle);
    console.log(toggle);
  }

  return (
    <>
      <Header>
        <Navbar brand={title}>
          {completeBowlCakes.length ? (
            <button
              onClick={toggleComplete}
              className={
                !toggle && completeBowlCakes.length ? 'bg-green' : 'bg-warning'
              }
            >
              Voir les {!toggle ? 'complets' : 'manquants'}
            </button>
          ) : (
            <button disabled className="disabled">
              Voir les complets
            </button>
          )}
          <button
            onClick={() => setListByBowlCake(!listByBowlCake)}
            className="bg-green"
          >
            Manquants par {!listByBowlCake ? 'bowl cake' : 'ingrédient'}
          </button>
          {/* <div>liens et boutons ici</div> */}
        </Navbar>

        <h1>{title}</h1>
      </Header>
      <Home
        listByBowlCake={listByBowlCake}
        setListByBowlCake={setListByBowlCake}
      />
      {/* <Home  /> */}
      <footer>fabagile@prepare-ton-repas ©️ 2023</footer>
      
    </>
  );
}

export default App;
