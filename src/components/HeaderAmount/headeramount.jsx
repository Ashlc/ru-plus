import React from "react";
import { useEffect } from "react";

function HeaderAmount({  }) {
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
		<div className="absolute top-0 flex items-center gap-10 justify-center bg-stdblue w-full p-3 rounded-b-3xl">
			<p className=" text-white font-extrabold">SALDO ATUAL</p>
			<div className="text-white w-fit gap-2 flex items-center">
				<p>R$</p>
				<p className="text-lg" id="wallet"></p>
			</div>
		</div>
	);
}

export default HeaderAmount;
