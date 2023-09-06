import React from "react";
import "primeicons/primeicons.css";

function Settings() {
	return (
<<<<<<< HEAD
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
=======
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
				<a href="/apagar">
					<p className="font-medium text-stdred">APAGAR CONTA</p>
				</a>
>>>>>>> e1a6aa1349ef02925b50b17baae431f705907ca9
			</div>
		</div>
	);
}

export default Settings;
