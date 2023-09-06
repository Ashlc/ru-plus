import React, { useState } from "react";
import QRCode from "./QRCodeComponent";
import { Link } from "react-router-dom";
import PriceNMeal from "./Price&Meal";
import Navigator from "../../components/Navigator/Navigator";

function Payment1({ price, mealType }) {
	return (
		<main className="flex justify-center w-full h-screen">
			<div className="flex flex-col justify-start tall:justify-center pt-14 tall:pt-0 items-center text-center gap-10 tall:gap-16">
				<PriceNMeal mealType={mealType} price={price} white={false} />
				<QRCode />
				<div className="flex flex-col justify-center items-center">
					<Link
						to="/home"
						className="font-black text-xs text-stdred border rounded-3xl border-stdred py-3 px-7">
						CANCELAR TRANSAÇÃO
					</Link>
				</div>
				<Navigator place={"payment"} />
			</div>
		</main>
	);
}

export default Payment1;
