import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export default function Detail({ title, list, className }) {
  // console.table(bowlCake)
  return (
    <>
      <summary className={`${className} txt-left`}>
        {capitalizeFirstLetter(title)}
      </summary>

      {list.map((item, key) => (
        <div className="list txt-left " key={key}>
          {item.name}
        </div>
      ))}
    </>
  );
}
