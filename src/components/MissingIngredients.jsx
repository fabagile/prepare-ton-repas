import ItemDetail from './UI/ItemDetail';

export default function MissingIngredients({ list, missingArray, toggle }) {
  if (missingArray.length && list.length && toggle) console.table(list);
  return (
    <>
      <div>Incomplets</div>

      {list.map((item, k) => (
        <details  open={k===0} key={k}>
          <ItemDetail className='tile'  title={item.bowls} list={item.ingredients} />
        </details>
      ))}
    </>
  );
}
