export default function ItemDetail({ title, list, className }) {
  // console.table(bowlCake)
  return (
    <>
      <summary className={`${className} txt-left`}>{title}</summary>
      
      <div className="tiles txt-left">{list.map((item, key)=> <div key={key} className="unbordered-tile" >{item}</div> )}</div>
    </>
  );
}
