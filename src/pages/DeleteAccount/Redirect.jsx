import React from "react";
import logo from "../../assets/RUPLUS.svg";
import Back from "../../components/Back/Back";
import { useNavigate } from "react-router-dom";

function Redirect() {
	const timeout = 10000;
	const navigate = useNavigate();

	setTimeout(() => {
		navigate("/");
	}, timeout);

	return (
		<div className="bg-stdblue w-full flex flex-col justify-center items-center gap-6 min-h-screen">
			<div className="flex justify-center items-center">
				<img src={logo} alt="" />
			</div>
			<p className="flex justify-center font-bold text-lg text-white">
				AGUARDE
			</p>
			<p className="text-white w-10/12 text-center flex justify-center font-normal">
				O saque pode levar de 7 a 10 dias úteis para ser processado.
			</p>
			<div className="flex items-center absolute bottom-20">
				<p className="text-white text-sm">Você será redirecionado.</p>
			</div>
		</div>
	);
}

export default Redirect;
