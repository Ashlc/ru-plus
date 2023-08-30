import React from "react";
import WatchIcon from "../../assets/chronic.svg";

function WaitingConfirmation(){
    return(
        <div className="bg-[#005CA9] flex-column min-h-screen">
            <div className="flex justify-center mb-8">
                <img src={WatchIcon} alt=""/>
            </div>
            <div className="w-2/4 flex-column bg-pink-200 justify-center m-auto mb-14">
                <h1 className="flex justify-center font-extrabold text-[#fff]">AGUARDANDO CONFIRMAÇÃO</h1>
            </div>
            <div className="w-3/12 flex-column bg-pink-200 justify-center m-auto mb-14">
                <h1 className="text-[#fff] flex justify-center font-normal">Quando seu pagamento for confirmado, seus créditos estarão disponíveis na sua carteira.</h1>
            </div>
        </div>
    );
}
export default WaitingConfirmation;
