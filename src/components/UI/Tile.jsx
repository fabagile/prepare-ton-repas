export default function Tile({ title, list,className }) {
  return (
    <div className={`${className} tile`}>
      <div className="tile-title ">{title}</div>
      {list.map((item, key) => (
        <div className="list txt-left " key={key}>
          {item}
        </div>
      ))}
    </div>
  );
}
