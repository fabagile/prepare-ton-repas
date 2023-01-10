export default function Tile({ title, list, recipe, durations,className }) {
  return (
    <div className={`border-${className} ${className} tile`}>
      <div className="tile-title ">{title}</div>
      <details open>
        <summary>Ingrédients</summary>
      {list.map((item, key) => (
        <div className="list txt-left " key={key}>
          {item}
        </div>

      ))}
      </details>
      <details>
        <summary>Préparation </summary>
        <ol>
          {recipe.map((el, i)=><li key={i}>{el}</li>)}
        </ol>
      </details>
    </div>
  );
}
