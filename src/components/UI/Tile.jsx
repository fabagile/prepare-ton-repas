export default function Tile({ title, list, recipe, durations, className }) {
  return (
    <div className={`border-${className} ${className} tile`}>
      <div className="tile-title ">{title}</div>
      <details open>
        <summary>Ingrédients</summary>
      {list.map(({quantity, name, quality}, key) => (
        <div className="list txt-left " key={key}>
          {quantity} {name} {quality && `(${quality})`}
        </div>

      ))}
      </details>
      <details>
        <summary>Préparation</summary>
        <div className="">
        <div className="list">📕 {durations.preparation} mn</div>
        <div className="list">🍜 {durations.cooking} mn</div>

        </div>
      </details>
      <details>
        <summary>Recette</summary>
        <div className="list indent">
          {recipe.map((el, i)=><div className="list" key={i}>{i+1}. {el}</div>)}
        </div>
      </details>
    </div>
  );
}
