import "./Landing.css";
import { React } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/RUPLUS.svg";
import Button from "../../components/Button/Button";

function Landing() {
	const navigate = useNavigate();

	const handleLogIn = () => {
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;

		if (email && password) {
			const data = {
				email,
				password,
			};
			console.log(data);
		}

		navigate("/home");
	};

	const handleSignUp = () => {
		navigate("/cadastro");
	};

	return (
		<div className="flex justify-center w-full h-screen bg-stdblue">
			<div className="flex flex-col justify-center items-center text-center gap-10">
				<div className="gap-2 flex flex-col justify-center items-center">
					<img src={logo} alt="" className="w-36" />
					<p className="font-medium text-white">Carteira Virtual</p>
				</div>
				<div className="flex flex-col justify-center items-center gap-3">
					<input
						id="email"
						type="email"
						placeholder="Email"
						className="rounded-lg border-silver border w-72 pl-3 py-1 text-midnight focus:outline-stdorange"
					/>
					<input
						id="password"
						type="password"
						placeholder="Senha"
						className="rounded-lg border-silver border w-72 pl-3 py-1 text-midnight focus:outline-stdorange"
					/>
					<Button text={"ENTRAR"} func={handleLogIn} />
					<a href="/recuperar">
						<p className="text-white font-light text-sm underline underline-offset-4">
							Esqueceu sua senha?
						</p>
					</a>
					<hr className="border-white w-full my-10" />
					<p className="text-white">PRIMEIRA VEZ?</p>
					<Button text={"CADASTRE-SE"} func={handleSignUp} />
				</div>
			</div>
		</div>
	);
}

export default Landing;
