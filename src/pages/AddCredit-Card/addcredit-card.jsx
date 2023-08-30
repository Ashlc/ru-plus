import React from "react";
import HeaderAmount from "../../components/HeaderAmount/headeramount";
import PaymentOptions from "../../components/PaymentOptions/paymentoptions";
import navigateicon from "../../assets/navigate_next.svg";
import { Link } from "react-router-dom";
import Navigator from "../../components/Navigator/Navigator";

function AddCreditCard() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen w-full">
			<HeaderAmount />
			<div className="-mt-20 flex-col w-11/12  gap-5 flex items-center justify-between">
				<div className="valorText text-[#7F8C8D] pt-14 w-5/6">
					<p>R$</p>
					<hr className="w-full border-[#005CA9]" />
					<p className="text-xs flex justify-center mt-2">
						VALOR A SER DEPOSITADO
					</p>
				</div>
				<div className="border w-5/6 h-auto rounded-2xl p-5 mt-8">
					<PaymentOptions />
				</div>
				<div className="border border-[#005CA9] rounded-3xl p-2 mt-7 w-5/6 text-[#005CA9] flex justify-center">
					<Link to="/inserir-cartao">
						<a href=".">
							<h1>AVANÇAR</h1>
						</a>
					</Link>
					<img src={navigateicon} className="ml-3" alt="" />
				</div>
			</div>
			<Navigator />
		</div>
	);
}
export default AddCreditCard;
