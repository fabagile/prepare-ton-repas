export default function ItemDetail({ title, list, className }) {
  // console.table(bowlCake)
  return (
    <>
      <summary className={`${className} txt-left`}>{title}</summary>
      <div className="txt-left">{list.join(', ')}</div>
    </>
  );
}
