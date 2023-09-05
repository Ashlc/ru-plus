import React from "react";
import "primeicons/primeicons.css";

function Settings() {
	return (
		<div className="flex flex-col gap-2 tall:gap-4">
			<hr />
			<p className="text-silver">CONFIGURAÇÕES</p>
			<hr className="mb-4" />
			<div className="flex flex-col gap-10 tall:gap-16">
				<a href="/">
					<div className="flex gap-3 items-center text-concrete">
						<p className="font-medium">SAIR</p>
						<i className="pi pi-sign-out font-medium"></i>
					</div>
				</a>
				<a href="/extrato">
					<p className="font-medium text-midnight">VISUALIZAR EXTRATO</p>
				</a>
				<p className="font-medium text-midnight">ALTERAR SENHA</p>
				<p className="font-medium text-stdred">APAGAR CONTA</p>
			</div>
		</div>
	);
}

export default Settings;
