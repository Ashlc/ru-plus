import React from "react";
import "primeicons/primeicons.css";

function Settings() {
	return (
		<div className="flex flex-col gap-2">
			<hr />
			<p>CONFIGURAÇÕES</p>
			<hr className="mb-5" />
			<div className="flex flex-col gap-[4vh]">
				<div className="flex gap-3 items-center text-concrete">
					<p className="font-medium">SAIR</p>
					<i className="pi pi-sign-out font-medium"></i>
				</div>
				<p className="font-medium text-midnight">VISUALIZAR EXTRATO</p>
				<p className="font-medium text-midnight">ALTERAR SENHA</p>
				<p className="font-medium text-red">APAGAR CONTA</p>
			</div>
		</div>
	);
}

export default Settings;
