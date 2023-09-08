import React from "react";
import checkmark from "../../assets/CHECKMARK.svg"
import { Link } from "react-router-dom";
import PriceNMeal from "./Price&Meal";
import Back from "../../components/Back/Back"


function Confirmed() {
  {/* When we make the place where this information comes from we will change this!! */ }
  const mealType = "Almoço";
  const price = 3.00;

  return (
    <div className="flex justify-center w-full h-screen bg-moonstone">
      <div className="flex flex-col justify-center items-center text-center gap-10">
        <div className="gap-2 flex flex-col justify-center items-center">
          <img src={checkmark} className="w-36" alt="Checkmark SVG" />
        </div>
        <PriceNMeal mealType={mealType} price={price} white={true} />
        <div className="flex flex-col justify-center items-center">
          {/*Currently this goes back to the start, when we make the correct path I will change this*/}
          <Back href={"/home"} />
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
