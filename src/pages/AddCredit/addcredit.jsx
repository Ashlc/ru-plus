import React from "react";
import HeaderAmount from "../../components/HeaderAmount/headeramount";
import PaymentOptions from "../../components/PaymentOptions/paymentoptions";
import Navigator from "../../components/Navigator/Navigator";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "primeicons/primeicons.css";

function AddCreditCard() {
	const navigate = useNavigate();
	const [invalid, setInvalid] = React.useState(false);

	const handleClick = () => {
		const val = document.getElementById("paymentoptions").selected;
		const amount = document.getElementById("amount").value;
		if (amount === "") {
			warn();
		}
		if (val === "credit" && amount !== "") {
			navigate("/inserir/cartao", { state: { amount: amount } });
		}
		if (val === "boleto" && amount !== "") {
			navigate("/inserir/boleto", { state: { amount: amount } });
		}
		if (val === "pix" && amount !== "") {
			navigate("/inserir/pix", { state: { amount: amount } });
		}
	};

	const warnTimeout = () => {
		setInvalid(false);
	};

	const warn = () => {
		setInvalid(true);
		setTimeout(warnTimeout, 5000);
	};

	return (
		<main className="flex flex-col items-center w-screen h-screen gap-10">
			<HeaderAmount saldo={"0,00"} />
			<div className="flex flex-col w-9/12 gap-10">
				<div className="text-concrete relative flex flex-col items-center mt-10 pt-10 tall:mt-20">
					<p className="absolute left-0">R$</p>
					<input
						id="amount"
						type="number"
						className="w-full appearance-none outline-none border-b-2 border-stdblue text-midnight font-semibold mb-4 text-center px-10 pb-2 focus:border-stdorange active:border-b-3 focus:appearance-none"
					/>
					<p className="text-xs flex justify-center">VALOR A SER DEPOSITADO</p>
				</div>
				<PaymentOptions />
				<Button text={"AVANÇAR"} func={handleClick} col="blue" />
				{invalid && (
					<div className="flex items-center gap-3 border border-stdblue p-5 rounded-lg">
						<i className="pi pi-exclamation-triangle text-stdblue" />
						<p className="text-stdblue text-justify text-md">
							Insira um valor válido.
						</p>
					</div>
				)}
			</div>
			<Navigator />
		</main>
	);
}
export default AddCreditCard;
