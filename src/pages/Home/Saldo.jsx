import React from "react";
import { useEffect } from "react";

export default function Saldo({  }) {
	useEffect(() => {
		getData();
	}, [])

	const getData = async () => {
		const id = localStorage.getItem('idUser');
		const response = await fetch(`http://localhost:3001/user/${id}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
			}
		);
		const data = await response.json();
		console.log(data.wallet[0].balance)
		document.getElementById("wallet").innerHTML = data.wallet[0].balance;	
	}

	return (
		<div className="h-1/5 w-full relative border border-silver rounded-2xl flex flex-col items-center justify-center gap-2">
			<div className="absolute top-3 left-4">
				<p className="text-stdblue font-bold text-md">SALDO</p>
			</div>
			<p className="text-silver text-4xl font-medium">
				R$ <b className="text-midnight" id="wallet"></b>
			</p>
		</div>
	);
}
