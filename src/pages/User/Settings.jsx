import React from "react";
import "primeicons/primeicons.css";

function Settings() {
	return (
		<div className="flex flex-col h-2/3">
			<div className="h-10 flex flex-col justify-between">
				<hr />
				<p className="text-sm font-bold text-concrete">CONFIGURAÇÕES</p>
				<hr />
			</div>
			<div className="flex flex-col grow justify-between text-sm font-medium border">
				<div className="flex gap-3 items-between text-concrete">
					<p className="font-bold">SAIR</p>
					<i className="pi pi-sign-out font-bold"></i>
				</div>
				<p className="text-midnight">VISUALIZAR EXTRATO</p>
				<p className="text-midnight">ALTERAR SENHA</p>
				<p className="text-stdred">APAGAR CONTA</p>
			</div>
		</div>
	);
}

export default Settings;
