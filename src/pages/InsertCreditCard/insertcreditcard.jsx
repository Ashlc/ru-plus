import React from "react";
import icon from "../../assets/credit_card.svg";
import Navigator from "../../components/Navigator/Navigator";
import Button from "../../components/Button/Button";
import Back from "../../components/Back/Back";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD

function InsertCreditCard(){
    return (
        <div className="">
            {/* HEADER */}
            <div className="w-full flex justify-center items-center bg-stdblue text-[#fff] border rounded-b-2xl h-14">
                <p className="font-semibold">CRÉDITO</p>
            </div>
            {/* PAGE */}
            <div className="page w-full flex flex-col items-center justify-center pt-11">
                {/* WALLET ICON */}
                <div className="w-10/12 h-1/5 flex justify-center">
                    <img src={icon} alt="icon wallet"/>
                </div>
                {/* SALDO */}
                <div className="saldo border border-[#BDC3C7] flex rounded-3xl justify-center w-10/12 h-20 items-center">
                    <p className="text-[#7F8C8D] font-extrabold text-3xl mr-2">R$</p>
                    <b className="text-[#2D3436] font-extrabold text-4xl">00</b>
                </div>
                {/* FIELDSET 1 */}
                <div className="pt-3 w-10/12">
                    <fieldset>
                        <legend className="text-[#2D3436] font-normal mb-1 text-xs">NOME DO TITULAR</legend>
                        <input type="text" className="border border-px border-[#BDC3C7] rounded-md w-full mb-4"/>
                        <legend className="text-[#2D3436] font-normal mb-1 text-xs">Nº DO CARTÃO</legend>
                        <input type="number" className="border border-px border-[#BDC3C7] rounded-md w-full mb-4"/>
                    </fieldset>
                </div>
                {/* FIELDSET 2 */}
                <div className="w-10/12 flex">
                    <div className="w-2/3 pr-2">
                        <fieldset>
                            <legend className="text-[#2D3436] font-normal mb-1 text-xs">DATA DE VENCIMENTO</legend>
                            <input type="number" className="border border-px border-[#BDC3C7] w-full rounded-md mb-4"/>
                        </fieldset>
                    </div>
                    <div className="w-1/3 pl-2">
                    <fieldset>
                        <legend className="text-[#2D3436] font-normal mb-1 text-xs">CVV</legend>
                        <input type="number" className="border border-px border-[#BDC3C7] w-full rounded-md mb-4"/>
                    </fieldset>
                    </div>
                </div>
                {/* PURCHASE BUTTON */}
                <div className="border border-[#005CA9] rounded-3xl p-2 mt-7 w-5/6 text-[#005CA9] flex justify-center">
                    <Link to={`/aguardando-confirmacao`}>
                        <p>CONFIRMAR COMPRA</p>
                    </Link>
                </div>
                <div className="flex items-center justify-center w-10/12 h-36">
                    <p className="text-underline text-[#005CA9] text-xs font-normal">
                        <Link to={`/inserir`}>
                            VOLTAR
                        </Link>
                    </p>
                </div>
            </div>
                <Navigator />
        </div>
    );
=======
function InsertCreditCard() {
	const amount = 0;
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/confirmar");
	};
	return (
		<div className="flex flex-col items-center h-screen w-full">
			{/* HEADER */}
			<div className="w-full flex justify-center items-center bg-stdblue text-white rounded-b-2xl h-14">
				<p className="font-semibold text-base">CRÉDITO</p>
			</div>
			{/* PAGE */}
			<div className="w-10/12 h-[80vh] flex flex-col gap-10 h-full items-center justify-center">
				{/* BARCODE ICON */}
				<img src={icon} alt="barcode icon" className="h-16" />
				{/* SALDO */}
				<div className="border border-silver flex gap-3 rounded-3xl justify-center w-full py-6 items-center">
					<p className="text-concrete font-extrabold text-3xl">R$</p>
					<b className="text-midnight font-extrabold text-4xl">{amount}</b>
				</div>
				{/* FIELDSET 1 */}
				<div className="w-full">
					<fieldset>
						<legend className="text-[#2D3436] font-normal mb-1 text-xs">
							NOME DO TITULAR
						</legend>
						<input
							type="text"
							className="border border-px border-[#BDC3C7] rounded-md w-full mb-4"
						/>
						<legend className="text-[#2D3436] font-normal mb-1 text-xs">
							Nº DO CARTÃO
						</legend>
						<input
							type="number"
							className="border border-px border-[#BDC3C7] rounded-md w-full mb-4"
						/>
					</fieldset>
					<div className="w-full flex gap-4">
						<div className="w-2/3">
							<fieldset>
								<legend className="text-[#2D3436] font-normal mb-1 text-xs">
									DATA DE VENCIMENTO
								</legend>
								<input
									type="number"
									className="border border-px border-[#BDC3C7] w-full rounded-md mb-4"
								/>
							</fieldset>
						</div>
						<div className="w-1/3">
							<fieldset>
								<legend className="text-[#2D3436] font-normal mb-1 text-xs">
									CVV
								</legend>
								<input
									type="number"
									className="border border-px border-[#BDC3C7] w-full rounded-md mb-4"
								/>
							</fieldset>
						</div>
					</div>
				</div>
				{/* PURCHASE BUTTON */}
				<Button text={"CONFIRMAR COMPRA"} col="blue" func={handleClick} />
				{/* VOLTAR BUTTON */}
				<Back href={"/inserir"} col="blue" />
			</div>
			<Navigator />
		</div>
	);
>>>>>>> fa3fb0e63714985bd0b9fe13b822a31e646e21f6
}

export default InsertCreditCard;
