import React from "react";
import checkmark from "../../assets/CHECKMARK.svg"
import { Link } from "react-router-dom";

function Payment2() {
    {/* When we make the place where this information comes from we will change this!! */}
    const mealType = "Almoço"; 
    const price = 3.00; 

    return(    
  <div className="flex justify-center w-full h-screen bg-moonstone">
    <div className="flex flex-col justify-center items-center text-center gap-10">
      <div className="gap-2 flex flex-col justify-center items-center">
        <img src={checkmark} className="w-36" alt ="Checkmark SVG"/>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="font-bold text-white text-xl">{mealType}</p>
        <p className="font-bold text-white text-4xl">
        <span className="text-3xl font-extrabold">R$ </span>
        <span>{price.toFixed(2).replace('.', ',')}</span>
         </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        {/*Currently this goes back to the start, when we make the correct path I will change this*/}
        <Link to="/" className="text-sm text-white font-extrabold underline underline-offset-4 mt-20">Voltar</Link>
      </div>
    </div>
  </div>
  );
};

export default Payment2;
