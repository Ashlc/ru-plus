import React, { useState } from "react";
import Navigator from "../../components/Navigator/Navigator";
import HeaderAmount from "../../components/HeaderAmount/headeramount";
import Payment from "./Payment";

function ChooseMeal() {

	const [showPayment, setShowPayment] = useState(false);
  const [price, setPrice] = useState(1);
  const [mealType, setMealType] = useState("SOPA OU BOLO");
	function togglePaymentPageOP1() {
    setPrice(1);
    setMealType("SOPA OU BOLO");
	  setShowPayment(!showPayment);
	}
	function togglePaymentPageOP2() {
    setPrice(3);
    setMealType("REGIONAL");
		setShowPayment(!showPayment);
	  }

	return (
		<div>
			{showPayment ? (
				<Payment price = {price} mealType = {mealType}/>
			) : (	<div className="flex flex-col relative justify-center w-full h-screen">
			<HeaderAmount />
			<div className="flex flex-col justify-center items-center text-center gap-7">
				{/* Div 1 */}
				<div className="flex flex-col justify-center items-center text-center gap-7">
					<button onClick={togglePaymentPageOP1}>
						<div className="border-2 border-silver rounded-3xl outline-2 flex-none">
							<div className="p-8 font-extrabold flex flex-col gap-9 w-72 h-48 justify-center">
								<div className="flex flex-col gap-4">
								<p className="text-stdblue text-xl">SOPA OU BOLO</p>
								<hr className="border border-silver"></hr>
								</div>
								<p className="text-4xl">
								<span className="text-silver font-light text-3xl">R$ </span>
								<span className="text-stdblue">1,00</span>
								</p>
							</div>
						</div>
					</button>
					<button onClick={togglePaymentPageOP2}>
						<div className="border-2 border-silver rounded-3xl outline-2 flex-none">
							<div className="p-8 font-extrabold flex flex-col gap-9 w-72 h-48 justify-center">
								<div className="flex flex-col gap-4">
									<p className="text-stdblue text-xl">REGIONAL</p>
									<hr className="border border-silver"></hr>
								</div>
								<p className="text-4xl">
									<span className="text-silver font-light text-3xl">R$ </span>
									<span className="text-stdblue">3,00</span>
								</p>
							</div>
						</div>
					</button>
				</div>
				<Navigator place={"payment"} />
			</div>
		</div>)};
	  </div>
	);
}

export default ChooseMeal;
