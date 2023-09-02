import React from "react";
import "./Payment.css";
import creditfail from "../../assets/CREDITCARDFAIL.svg";
import { Link } from "react-router-dom";

function FailedPayment() {
  return(
	<div className="flex justify-center w-full h-screen white-page">
		<div className="flex flex-col justify-center items-center text-center gap-3">
			<div className="flex flex-col justify-center items-center">
				{/*SVG*/}
				<img src={creditfail} className="w-36" alt ="Credit card fail SVG"/>
				</div>
			<div className="flex flex-col justify-center items-center">
				{/*Texto GRANDE*/}
				<p className="text-concrete big-text mulish-font">SALDO</p>
				<p className="text-concrete big-text mulish-font">INSUFICIENTE</p>
				</div>
			<div className="flex flex-col justify-center items-center">
				{/*Textinho*/}
				<p className="medium-text mulish-font">Insira créditos na sua carteira</p>
				<p className="medium-text mulish-font">virtual para utilizar o RU+</p>
				</div>
			<div className="flex flex-col justify-center items-center">
					{/*Voltar voltar mulish-font*/}
					<Link to="/" className="voltar text-gray mt-20 mulish-font">VOLTAR</Link>
				</div>
			</div>
		</div>
  );
};

export default FailedPayment;