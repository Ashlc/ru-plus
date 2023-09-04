import React from "react";
import "./Navigator.css";
//import "primeicons/primeicons.css";

function Navigator() {
	return (
		<div className="w-full flex justify-around items-center bg-stdblue h-14 absolute bottom-0 rounded-t-2xl">
			<a href="/pagamento">
				<div className="h-12 flex items-center justify-center w-10 rounded-xl hover:bg-moonstone transition-all">
					<i className="pi pi-qrcode text-xl text-white hover:text-lg" />
				</div>
			</a>
			<a href="/home">
				<div className="h-10 flex items-center justify-center w-10 rounded-xl hover:bg-moonstone transition-all">
					<i className="pi pi-home text-xl text-white hover:text-lg" />
				</div>
			</a>
			<a href="/usuario">
				<div className="h-10 flex items-center justify-center w-10 rounded-xl hover:bg-moonstone transition-all">
					<i className="pi pi-user text-xl text-white hover:text-lg" />
				</div>
			</a>
		</div>
	);
}

export default Navigator;
