import React from "react";
import Navigator from "../../components/Navigator/Navigator";
import Saldo from "./Saldo";
import Extract from "./Extract";
import IconButton from "../../components/IconButton/IconButton";

function Home() {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-5 pb-10">
			<div className="w-4/5 flex flex-col justify-center items-center gap-8 h-full">
				<Saldo />
				<Extract />
				<IconButton text="INSERIR CRÉDITOS" icon="pi-credit-card" />
			</div>
			<Navigator />
		</div>
	);
}

export default Home;
