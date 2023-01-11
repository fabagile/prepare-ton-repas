import Complete from "./Complete";
import Missing from "./Missing";
// import { connectDB } from "../utils/connectDB";


export const BowlCakeList = ({missingIngredientsBowlCakes,
  missingArray,
  completeBowlCakes,toggle, setComplete}) => {


  // const disabled =

  // choix du bowl cake
  // const [showBowlCake, setshowBowlCake] = useState(false);
  // function triggerShowBowlCake() {
  //   setshowBowlCake(!showBowlCake);
  //   console.log(showBowlCake);
  // }

  return (
    <section id="bowlcake-list">
      <h2>Bowl Cakes</h2>
      <div className="flex-stretch">
        <Complete
          toggle={completeBowlCakes.length}
          bowlCakes={completeBowlCakes}
        />
        <Missing
          toggle={missingIngredientsBowlCakes.length}
          bowlCakes={missingIngredientsBowlCakes}
          missingArray={missingArray}
        />
      </div>


    </section>
  );
};
