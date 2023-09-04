import React from "react";
import "primeicons/primeicons.css";
import Navigator from "../../components/Navigator/Navigator";
import icon from "../../assets/credit_card.svg";
 

function InsertCreditCard(){
    return (
        <div className="h-fit w-full">
            <div className="header w-full flex justify-center bg-[#005CA9] text-[#fff] border rounded-b-xl h-11">
                <h1 className="font-semibold m-auto">CRÉDITO</h1>
            </div>
            <div className="page w-4/5 m-auto pt-11">
                <div className="w-full h-auto flex justify-center">
                    <img src={icon} alt="icon wallet"/>
                </div>
                <div className="saldo border border-[#BDC3C7] flex rounded-xl justify-center w-full h-20 items-center mt-4">
                    <h2 className="text-[#7F8C8D] font-extrabold text-2xl">R$</h2>
                    <h1 className="text-[#2D3436] font-extrabold text-4xl">00</h1>
                </div>
                <div className="pt-3 wfull">
                    <fieldset className="w-full">
                        <legend className="text-[#2D3436] font-normal mb-1 text-xs">NOME DO TITULAR</legend>
                        <input type="text" className="border-px border-[#BDC3C7] w-full mb-4"/>
                        <legend className="text-[#2D3436] font-normal mb-1 text-xs">Nº DO CARTÃO</legend>
                        <input type="number" className="border-px border-[#BDC3C7] w-full mb-4"/>
                    </fieldset>
                    <fieldset className="flex">
                        <legend className="text-[#2D3436] font-normal mb-1 w-2/4 text-xs">DATA DE VENCIMENTO</legend>
                        <input type="date" className="border border-[#BDC3C7] mb-4 w-2/4"/>
                        <legend className="text-[#2D3436] font-normal mb-1 text-xs">CVV</legend>
                        <input type="number" className="border-px border-[#BDC3C7] mb-4 w-fit"/>
                    </fieldset>
                </div>
                <a href="www.google.com">
                    <div className="border border-[#005CA9] flex justify-center rounded-2xl p-2 mt-5">
                        <h1 className="font-semibold text-[#005CA9]">CONFIRMAR COMPRA</h1>
                    </div>
                </a>
            </div>
                <Navigator />
        </div>
    );
}
export default InsertCreditCard;