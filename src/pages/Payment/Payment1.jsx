import React from "react";
import QRCode from "./QRCodeComponent";
import { Link } from "react-router-dom";
import PriceNMeal from "./Price&Meal";
function Payment1() {
    const mealType = "ALMOÇO"; 
    const price = 3.00; 

    return(
  <div className="flex justify-center w-full h-screen">
    <div className="flex flex-col justify-center items-center text-center gap-7">
      <PriceNMeal mealType = {mealType} price = {price} />
      <QRCode/>
        <div className="flex flex-col justify-center items-center">
            {/*Cancelar Transação*/}
            <Link to="/" className="font-black text-xs text-stdred border rounded-3xl border-stdred py-3 px-7">CANCELAR TRANSAÇÃO</Link>
        </div>
    </div>
  </div>
    );
};


export default Payment1;