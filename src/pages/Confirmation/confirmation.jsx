import React from "react";
import ConfirmLogo from "../../assets/task_alt.svg";
import { Link } from "react-router-dom";

function Confirmation(){
    return(
        <div className="bg-[#005CA9] w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-3/4 h-3/4 mt-6">
                {/* IMAGE DIV */}
                <div>
                   <img src={ConfirmLogo} className="m-auto"/>
                </div>
                {/* TEXT DIV */}
                <div className="text-center mt-10">
                    <p className="text-xl font-bold text-white">ALMOÇO</p>
                    <p className="text-3xl font-bold text-white mt-3">R$ 3,00</p>
                </div>
                {/* VOLTAR BUTTON */}
                <div className="flex items-end justify-center w-full h-36">
                    <p className="text-underline text-[#fff] text-xs font-normal">
                        <Link to={`/inserir`}>
                            VOLTAR
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
