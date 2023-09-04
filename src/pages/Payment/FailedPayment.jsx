import React from "react";
import creditfail from "../../assets/CREDITCARDFAIL.svg";
import { Link } from "react-router-dom";

function FailedPayment() {
  return(
	<div className="flex justify-center w-full h-screen">
		<div className="flex flex-col justify-center items-center text-center gap-3">
			<div className="flex flex-col justify-center items-center">
				{/*SVG*/}
				<img src={creditfail} className="w-36" alt ="Credit card fail SVG"/>
				</div>
			<div className="flex flex-col justify-center items-center">
				{/*Texto GRANDE*/}
				<p className="text-silver font-extrabold text-3xl">SALDO</p>
				<p className="text-silver font-extrabold text-3xl">INSUFICIENTE</p>
				</div>
			<div className="flex flex-col justify-center items-center">
				{/*Textinho*/}
				<p className="text-base font-medium text-midnight">Insira créditos na sua carteira</p>
				<p className="text-base font-medium text-midnight">virtual para utilizar o RU+</p>
				</div>
			<div className="flex flex-col justify-center items-center">
					{/*Voltar*/}
					<Link to="/" className="font-extrabold underline underline-offset-4 text-midnight mt-20">VOLTAR</Link>
				</div>
			</div>
		</div>
  );
};

export default FailedPayment;