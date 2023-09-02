import React from "react";
import { useState } from "react";
import HeaderAmount from "../../components/HeaderAmount/headeramount";
import PaymentOptions from "../../components/PaymentOptions/paymentoptions";
import navigateicon from "../../assets/navigate_next.svg";
import Navigator from "../../components/Navigator/Navigator";
import { Link } from 'react-router-dom';


function AddCreditCard(){
    const [selectedOption, setSelectedOption] = useState(null);
    
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

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
                    <Link to={`/addcredito/${selectedOption}`}>
                        <p>AVANÇAR</p>
                    </Link>
                        <img src={navigateicon} className="ml-3" alt="Avançar" />
                </div>
                <Navigator className="absolute bottom-0 w-full"/>
            </div>
        </div>
    );
    
}
export default AddCreditCard
