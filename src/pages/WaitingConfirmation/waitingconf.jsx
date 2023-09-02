import React from "react";
import WatchIcon from "../../assets/chronic.svg";
import "./waitingconfig.css";
import { Link } from "react-router-dom";

function WaitingConfirmation() {
	return (
		<div className="bg-stdblue flex flex-col justify-center items-center gap-4 min-h-screen">
			<div className="flex justify-center items-center">
				<img src={WatchIcon} alt="" />
			</div>
			<p className="flex justify-center font-extrabold text-white">
				AGUARDANDO CONFIRMAÇÃO
			</p>
			<p className="text-white w-10/12 text-center flex justify-center font-normal">
				Quando seu pagamento for confirmado, seus créditos estarão disponíveis
				na sua carteira.
			</p>
            <div className="flex items-center absolute bottom-20">
                <p className="text-underline text-white text-center text-xs flex justify-center font-normal ">
                    <Link to={`/addcredito/cartaoCredito`}>
                        VOLTAR
                    </Link>
                </p>
            </div>
		</div>
	);
}
export default WaitingConfirmation;
