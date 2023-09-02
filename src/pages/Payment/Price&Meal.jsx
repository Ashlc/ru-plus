import React from "react";

function PriceNMeal({mealType, price}) {
  return (
    <div className="flex flex-col justify-center items-center">
        <p className="text-stdblue text-base font-black">{mealType}</p>
        <p className="font-bold text-3xl">
        <span className="text-silver font-extrabold">R$ </span>
        <span className="text-midnight font-bold">{price.toFixed(2).replace('.', ',')}</span>
        </p>
    </div>
  );
}

export default PriceNMeal;