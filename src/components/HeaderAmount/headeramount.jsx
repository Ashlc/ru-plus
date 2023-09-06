import React from "react";

function HeaderAmount({ saldo }) {
	return (
		<div className="absolute top-0 flex items-center gap-10 justify-center bg-stdblue w-full p-3 rounded-b-3xl">
			<p className=" text-white font-extrabold">SALDO ATUAL</p>
			<div className="text-white w-fit gap-2 flex items-center">
				<p>R$</p>
				<p className="text-lg">{saldo}</p>
			</div>
		</div>
	);
}

export default HeaderAmount;
