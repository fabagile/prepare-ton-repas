import Detail from "./UI/Detail";

export default function Missing({ bowlCakes, missingArray, toggle }) {
  if (missingArray.length && bowlCakes.length && !toggle ) return <>
    <div>Incomplets</div>
    {missingArray.map((miss) => (
      <details key={miss} >
        <summary >{miss}</summary>
        <div className="tiles">
          {/* c'est pas mieux... */}
          {bowlCakes.map(
            ({ id, name, missingNumber, missing }) =>
              miss === missingNumber && (
                <details key={id} className="">
                  <Detail className="warning" title={name} list={missing} />
                </details>
              )
          )}
        </div>
      </details>
    ))}
  </>;
}
