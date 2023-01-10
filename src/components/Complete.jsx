import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import Tile from "./UI/Tile";

export default function Complete({bowlCakes, toggle}) {
    if (bowlCakes.length && toggle ) return<div className="tiles">
          {bowlCakes.map(({ id, name, ingredients, page }) => (
            <div key={id}>
              <Tile className="green" title={`${capitalizeFirstLetter(name)}, p.${page}`} list={ingredients} />
            </div>
            ))}

        </div>
}