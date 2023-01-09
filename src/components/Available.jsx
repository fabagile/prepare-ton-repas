import ingredients from "../data/detailledIngredients.json";
import Tile from "./UI/Tile";

export default function Needed() {
  return (
    <>
      <h2>Ce que j'ai dans ma cuisine</h2>
      <div className="list tiles">
        <Tile title="biscuits" list={ingredients.biscuits} />
        <Tile title="féculents" list={ingredients.féculents} />
        <Tile title="fruits" list={ingredients.fruits} />
        <Tile title="sauces" list={ingredients.sauces} />
        <Tile title="condiments" list={ingredients.condiments} />
        <Tile title="laitiers" list={ingredients.laitiers} />
        <Tile title="légumes" list={ingredients.légumes} />
       
      </div>
    </>
  );
}
