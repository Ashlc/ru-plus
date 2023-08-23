import React from "react";
import "./Payment.css";
import checkmark from "../../assets/CHECKMARK.svg"
import { Link } from "react-router-dom";

function Payment2() {
    {/* When we make the place where this information comes from we will change this!! */}
    const mealType = "Almoço"; 
    const price = 3.00; 

    return(    
  <div className="flex justify-center w-full h-screen">
    <div className="flex flex-col justify-center items-center text-center gap-10">
      <div className="gap-2 flex flex-col justify-center items-center">
        <img src={checkmark} className="w-36" alt ="Checkmark SVG"/>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="font-bold text-white mulish-font text-xl">{mealType}</p>
        <p className="font-bold text-white mulish-font text-4xl">
        <span className="big-text font-weigt-800">R$ </span>
        <span>{price.toFixed(2).replace('.', ',')}</span>
         </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        {/*Currently this goes back to the start, when we make the correct path I will change this*/}
        <Link to="/" className="fifteen-text voltar mt-20 mulish-font">Voltar</Link>
      </div>
    </div>
  </div>
  );
};

export default Payment2;
