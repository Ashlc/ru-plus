import "./SignUp.css";
import { React } from "react";
import logo from "../../assets/RUPLUS.svg";
import Form from "./Form";

/* import Button from "../../components/Button/Button"; */

function SignUp() {
	return (
		<div className="flex flex-col items-center w-full pt-10">
			<div className=" flex flex-col w-10/12 gap-5">
				<div className="flex justify-between w-full">
					<p className="text-white text-2xl font-extrabold">CADASTRO</p>
					<img src={logo} alt="" className="h-6" />
				</div>
				<hr className="border-white w-full" />
				<Form />
				<div className="flex flex-col gap-1 w-full">
					<label htmlFor="type" className="text-white text-sm">
						TIPO DE COMPROVANTE DE VÍNCULO
					</label>
					<select
						name="type"
						id="type"
						className="appearance-none text-midnight rounded-md h-8 px-2 border-silver border checked:outline-stdorange">
						<option
							value={null}
							className="appearance-none text-midnight bg-white">
							--
						</option>
						<option
							value="student"
							className="appearance-none text-midnight bg-white">
							Matrícula
						</option>
						<option value="employee">Contra-cheque</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
