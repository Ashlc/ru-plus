import React from "react";
import { useState } from "react";

function HeaderAmount() {
	const [saldo, setSaldo] = useState(0.0);

	const atualizarSaldo = () => {
		var novoSaldo = saldo - 3;
		if (novoSaldo <= 0) {
			novoSaldo = 0;
		}
		setSaldo(novoSaldo);
	};
	return (
		<div className="fixed top-0 mobile-menu flex items-center justify-center bg-[#005CA9] w-full p-3 rounded-b-3xl">
			<div className="saldoText text-[#fff] font-extrabold w-1/2 flex justify-end ml-4">
				<h1>SALDO ATUAL</h1>
			</div>
			<div className="saldoValue text-[#fff] w-1/2 flex items-center">
				<div className="text-base mr-1 ml-4">
					<h1>R$</h1>
				</div>
				<div className="text-lg">
					<h1>{saldo}</h1>
				</div>
			</div>
		</div>
	);
}

export default HeaderAmount;
