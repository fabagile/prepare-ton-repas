// // import { cooks } from "../data/cooks";
// // import { ingredients } from "../data/ingredients";
// // import Tile from "./UI/Tile";

// export default function Cookable({ dish, selectDish, dishes }) {
  
//   //   function defineNeeded() {
//   //   }
//   //   defineNeeded();
//   return (
//     <>
//       <h2>Ce que je peux préparer </h2>
//       {dishes.length >=1  ? (
//         <div onChange={(e)=>selectDish(e.target.value)} >{dishes.map((d,k)=> (
//           <div key={k}>
//           <input value={d.name} name={dish} type="radio" id={d.name} placeholder={d.name} checked={d === dishes[0]}  /> 
//           <label name={dish} htmlFor={d.name} >{d.name}</label>


//           </div>

//         ))}
//         </div>

//       ) : (
//         <div >{dishes[0].name}</div>
//       )}
//     </>
//   );
// }
