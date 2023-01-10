import Tile from "./UI/Tile";

export default function Complete({bowlCakes, toggle}) {
    if (bowlCakes.length && toggle ) return<div className="tiles">
          {bowlCakes.map(({ id, name, ingredients }) => (
            <div key={id}>
              <Tile className="green" title={name} list={ingredients} />
            </div>
            ))}

        </div>
}