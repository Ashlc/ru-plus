import React from "react";
import HeaderAmount from "../../components/HeaderAmount/headeramount";
import PaymentOptions from "../../components/PaymentOptions/paymentoptions";
import navigateicon from "../../assets/navigate_next.svg";
import { Link } from 'react-router-dom';


function AddCreditCard(){
    return (
        <div className="">
            <HeaderAmount />
            <div className="page flex-col w-11/12 m-auto">
                <div className="valorText text-[#7F8C8D] pt-14 w-5/6 m-auto">
                    <h1>R$</h1>
                    <hr className="w-full border-[#005CA9]"/>
                    <h3 className="text-xs flex justify-center">VALOR A SER DEPOSITADO</h3>
                </div>
                <div className="border w-5/6 h-auto rounded-2xl p-5 mt-8 m-auto">
                    <PaymentOptions />
                </div>
                <div className="border border-[#005CA9] rounded-3xl p-2 mt-7 w-5/6 text-[#005CA9] flex justify-center m-auto">
                    <Link to="/inserir-cartao">
                        <a>
                            <h1>AVANÇAR</h1>
                        </a>
                    </Link>
                    <img src={navigateicon} className="ml-3"/>
                </div>
            </div>
        </div>
    );
}
export default AddCreditCard
import React from "react";
import HeaderAmount from "../../components/HeaderAmount/headeramount";
import PaymentOptions from "../../components/PaymentOptions/paymentoptions";
import navigateicon from "../../assets/navigate_next.svg";


function AddCreditCard(){
    return (
        <div className="">
            <HeaderAmount />
            <div className="page flex-col w-11/12 m-auto">
                <div className="valorText text-[#7F8C8D] pt-14 w-5/6 m-auto">
                    <h1>R$</h1>
                    <hr className="w-full border-[#005CA9]"/>
                    <h3 className="text-xs flex justify-center">VALOR A SER DEPOSITADO</h3>
                </div>
                <div className="border w-5/6 h-auto rounded-2xl p-5 mt-8 m-auto">
                    <PaymentOptions />
                </div>
                <div className="border border-[#005CA9] rounded-3xl p-2 mt-7 w-5/6 text-[#005CA9] flex justify-center m-auto">
                    <a href="www.google.com">
                        <h1>AVANÇAR</h1>
                    </a>
                    <img src={navigateicon} className="ml-3"/>
                </div>
            </div>
        </div>
    );
}
export default AddCreditCard