// import React, { useState , useEffect } from "react";
// import { cooks } from "../data/cooks";

import "../styles/App.scss";
// import Available from "./Available";
import { BowlCakeList } from "./BowlCakeList";

function App() {
  const title = "Prépare ton repas";
  document.title = title;
  // cooks.map((cook) => console.table(cook.ingredients));

  return (
    <div className="App">
      <header>
        <h1>{title}</h1>
      </header>
      <main className="flex-stretch">
        {/* <Available /> */}
        <BowlCakeList />
      </main>

    </div>
  );
}

export default App;
