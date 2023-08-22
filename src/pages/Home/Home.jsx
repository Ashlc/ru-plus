import React from "react";
import Navigator from "../../components/Navigator/Navigator";
import Saldo from "./Saldo";
import Extract from "./Extract";

function Home() {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-5">
			<Saldo />
			<Navigator />
			<Extract />
		</div>
	);
}

export default Home;
