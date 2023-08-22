import React from "react";

export default function Saldo() {
	return (
		<div className="h-1/5 w-3/4 border border-silver rounded-2xl flex flex-col">
			<div className="pt-3 pl-4">
				<p className="text-stdblue font-bold text-md">SALDO</p>
			</div>
			<div className="flex items-center justify-center pt-3">
				<p className="text-silver text-4xl font-medium">
					R$ <b className="text-midnight">00</b>,00
				</p>
			</div>
		</div>
	);
}
