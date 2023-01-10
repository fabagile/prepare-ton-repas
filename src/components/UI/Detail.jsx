export default function Detail({ title, list, className }) {
  return (
    <>
      <summary className="txt-left">{title}</summary>
      {/* <div className={`border-${className} ${className} tile`}> */}
        {list.map((item, key) => (
          <div className="list txt-left " key={key}>
            {item}
          </div>
        ))}
      {/* </div> */}
    </>
  );
}
