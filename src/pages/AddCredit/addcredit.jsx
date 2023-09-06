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

<<<<<<< HEAD
    return (
        <div className="">
            <HeaderAmount />
            <div className="page flex flex-col justify-center items-center w-full">
                <div className="valorText text-[#7F8C8D] pt-14 w-5/6">
                    <p>R$</p>
                    <hr className="w-full border-[#005CA9]"/>
                    <p className="text-xs flex justify-center">VALOR A SER DEPOSITADO</p>
                </div>
                <div className="border w-5/6 flex flex-col mt-10 rounded-2xl">
                    <PaymentOptions className="flex items-center justify-center" onSelectOption={handleOptionChange}/>
                </div>
                <div className="border border-[#005CA9] rounded-3xl p-2 mt-7 w-5/6 text-[#005CA9] flex justify-center">
                    <Link to={`/inserir/${selectedOption}`}>
                        console.log(selectedOption);
                        <p>AVANÇAR</p>
                    </Link>
                        <img src={navigateicon} className="ml-3" alt="Avançar" />
                </div>
                <Navigator className="absolute bottom-0 w-full"/>
            </div>
        </div>
    );
    
=======
	return (
		<main className="flex flex-col items-center w-screen h-screen gap-10">
			<HeaderAmount saldo={"0,00"} />
			<div className="flex flex-col w-9/12 gap-10">
				<div className="text-concrete relative flex flex-col items-center pt-10 tall:pt-20">
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
>>>>>>> fa3fb0e63714985bd0b9fe13b822a31e646e21f6
}
export default AddCreditCard;
