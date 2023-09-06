import React from "react";
import HeaderAmount from "../../components/HeaderAmount/headeramount";
import PaymentOptions from "../../components/PaymentOptions/paymentoptions";
import Navigator from "../../components/Navigator/Navigator";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function AddCreditCard() {
	const navigate = useNavigate();

	const handleClick = () => {
		const val = document.getElementById("paymentoptions").selected;
		console.log(val);
		if (val === "credit") {
			navigate("/inserir/cartao");
		}
		if (val === "boleto") {
			navigate("/inserir/boleto");
		}
		if (val === "pix") {
			navigate("/inserir/pix");
		}
	};

	return (
		<main className="flex flex-col items-center w-screen h-screen gap-10">
			<HeaderAmount saldo={"0,00"} />
			<div className="flex flex-col w-9/12 gap-10">
				<div className="text-concrete relative flex flex-col items-center pt-20">
					<p className="absolute left-0">R$</p>
					<input
						type="number"
						className="w-full appearance-none outline-none border-b-2 border-stdblue text-midnight font-semibold mb-4 text-center px-10 pb-2 focus:border-stdorange active:border-b-3 focus:appearance-none"
					/>
					<p className="text-xs flex justify-center">VALOR A SER DEPOSITADO</p>
				</div>
				<PaymentOptions />
				<Button text={"AVANÇAR"} func={handleClick} col="blue" />
			</div>
			<Navigator />
		</main>
	);
}
export default AddCreditCard;
