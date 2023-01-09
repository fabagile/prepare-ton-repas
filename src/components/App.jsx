// import React, { useState , useEffect } from "react";
import { cooks } from "../data/cooks";
// import { ingredients } from "../data/ingredients";
// import detailledIngredients  from "../data/detailledIngredients.json";

// import logo from './logo.sv';

import "../styles/App.scss";
import Available from "./Available";
import { Dishes } from "./Dishes";
// import Cookable from "./Cookable";
// import Needed from "./Needed";

function App() {
  const title = "Prépare ton repas"
  document.title = title
  //  const cookableDishes = [] //cooks.reduce((acc, cook)=>ingredients.every(cook.ingredients) ? acc,[])
  // console.table(ingredients)
  cooks.map(cook=> console.table(cook.ingredients))
  // console.table(cookableDishes)
    // useEffect(()=> document.title = title, [])()
  // let cookableDishes;
  // cooks.map((cook) => {
  //   const gatherDishes = [];
  //   cook.ingredients.map((ci) => {
  //     const va = ingredients.filter(
  //       (i) =>
  //         ci === i &&
  //         (!cookableDishes.length ||
  //           !cookableDishes.find((el) => el.name === cook.name))
  //     );
  //     if (va.length) {
  //       gatherDishes.concat(...cook);
  //     }
  //     console.table(gatherDishes);
  //     console.log(gatherDishes[0].name);
  //     return va
  //   });
  //   if (gatherDishes.length >= 2) cookableDishes = [...gatherDishes];
  //   if (gatherDishes.length === 1) cookableDishes = { ...gatherDishes[0] };
  //   return cookableDishes;
  // });
  //  cooks.reduce((acc, cook)=> cook.ingredients.map(ci=>ingredients.filter(i=>ci===i))
  // , [])
  // const [dish, selectDish] = useState("");
  // console.log(dish);
  // const selectedDish = { ...cooks.find((cook) => cook.name === dish) };
  // let cookableDishes = [];

  // const cookable = cookableDishes.length;
  // console.log(cookable);
  // console.log(typeof selectDish)
  return (
    <div className="App">
      <header >
        <h1>{title}</h1>
        {/* {cookable && (
          <Cookable
          dish={dish}
          selectDish={selectDish}
          dishes={cookableDishes}
          />
        )} */}
        {/* {selectedDish.name} */}
        {/* <Needed dish={selectedDish} /> */}
      </header>
      <main>
        <Available />
        <Dishes />
        {/* <code>
        {JSON.stringify(detailledIngredients, null, 2)}

        </code> */}

      </main>
    </div>
  );
}

export default App;
