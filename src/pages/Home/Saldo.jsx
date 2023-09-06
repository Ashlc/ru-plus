import React from "react";

export default function Saldo({ amount = '00' }) {

	return (
		<div className="h-1/5 w-full relative border border-silver rounded-2xl flex flex-col items-center justify-center gap-2">
			<div className="absolute top-3 left-4">
				<p className="text-stdblue font-bold text-md">SALDO</p>
			</div>
			<p className="text-silver text-4xl font-medium">
				R$ <b className="text-midnight">{amount}</b>,00
			</p>
		</div>
	);
}
