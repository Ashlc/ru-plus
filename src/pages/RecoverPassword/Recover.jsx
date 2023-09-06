import React from "react";
import Form from "./Form";
import logo from "../../assets/RUPLUS.svg";
import Button from "../../components/Button/Button";

function Recover() {
	return (
		<main className="flex flex-col items-center w-full h-screen pt-10 bg-stdblue lg:justify-center lg:pb-20">
			<div className=" flex flex-col w-10/12 gap-8 lg:w-1/5">
				<div className="flex justify-between items-center w-full">
					<p className="text-white w-1/2 text-xl font-extrabold">
						REDEFINA SUA SENHA
					</p>
					<img src={logo} alt="" className="h-8" />
				</div>
				<hr className="border-white w-full" />
				<div className="flex flex-col gap-4">
					<Form />
				</div>
				<Button text={"AVANÇAR"} />
			</div>
		</main>
	);
}

export default Recover;
