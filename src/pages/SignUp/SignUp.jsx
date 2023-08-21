import "./SignUp.css";
import { React, useState } from "react";
import logo from "../../assets/RUPLUS.svg";
import Form from "./Form";
import { User } from "./User";
import Button from "../../components/Button/Button";
import "primeicons/primeicons.css";
import "primereact/resources/themes/tailwind-light/theme.css";

function SignUp() {
	const [file, setFile] = useState("");
	const [fileSize, setFileSize] = useState("");
	const [display, setDisplay] = useState("hidden");
	const [checked, setChecked] = useState(true);

	const handleUpload = (e) => {
		if (e.target.files.length !== 0) {
			const doc = e.target.files[0];
			setFile(doc);
			const size = doc.size;
			if (size >= 1000) {
				setFileSize((size / 1000).toFixed(2) + "KB");
			} else if (size >= 1000000) {
				setFileSize((size / 1000000).toFixed(2) + "MB");
			} else {
				setFileSize(size + "KB");
			}
			console.log(doc);
		} else {
			console.log("Upload aborted.");
		}
	};

	const handleClick = () => {
		document.getElementById("documents").click();
	};

	const handleCheck = () => {
		display === "hidden" ? setDisplay("block") : setDisplay("hidden");
	};

	const handleSubmit = () => {
		if (display === "hidden") {
			setChecked(false);
			return;
		}

		const user = new User();
		user.addFiles(file);
		const data = user.getJSON();

		console.log(data);
	};

	return (
		<div className="flex flex-col items-center w-full min-h-screen pt-10 bg-stdblue">
			<div className=" flex flex-col w-10/12 gap-8">
				<div className="flex justify-between w-full">
					<p className="text-white text-2xl font-extrabold">CADASTRO</p>
					<img src={logo} alt="" className="h-6" />
				</div>
				<hr className="border-white w-full" />
				<Form />
				<div className="flex flex-col w-full">
					<div className="flex flex-col w-full gap-1">
						<label htmlFor="password" className="text-white text-sm">
							SENHA
						</label>
						<input
							id="password"
							type="password"
							className="text-midnight rounded-md h-8 px-2 border-silver border focus:outline-stdorange"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label htmlFor="type" className="text-white text-sm">
						TIPO DE COMPROVANTE DE VÍNCULO
					</label>
					<select
						name="type"
						id="type"
						className="text-midnight rounded-md h-8 px-2 border-silver border checked:outline-stdorange">
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
				<div className="flex flex-col gap-5">
					<div className="flex gap-3 items-center">
						<i className="pi pi-file-import text-white text-xl" />
						<p className="text-md text-white">DOCUMENTOS</p>
					</div>
					<p className="text-justify text-sm text-white font-thin">
						Arquivo <span className="font-medium">PDF único</span> de no máximo{" "}
						<span className="font-medium">2MB</span> contendo CPF, RG e
						comprovante de vínculo de sua escolha.
					</p>
					<input
						type="file"
						name="documents"
						id="documents"
						className="hidden"
						onChange={handleUpload}
					/>
					<Button text={"INSERIR"} func={handleClick} />
					<div className="flex justify-between">
						<p className="w-1/2 text-sm text-white font-medium truncate">
							{file.name}
						</p>
						<p className="text-sm text-white font-thin">{fileSize}</p>
					</div>
					<div className="flex w-full h-fit gap-6">
						<div className="w-1/4">
							<button onClick={handleCheck}>
								<div className="h-6 w-6 border border-white rounded flex items-center justify-center">
									<div className={"h-3 w-3 bg-white rounded " + display}></div>
								</div>
							</button>
						</div>
						<p className="text-white font-thin text-justify">
							Declaro que as informações acima prestadas são verdadeiras, e
							assumo a inteira responsabilidade pelas mesmas sob as penas da Lei
							(Artigo 299 do Código Penal).
						</p>
					</div>
					{!checked && (
						<div className="flex gap-3 border border-white p-5 rounded-lg">
							<i className="pi pi-exclamation-triangle text-white" />
							<p className="text-white text-justify font-light text-sm">
								Você não pode avançar sem concordar com o termo acima.
							</p>
						</div>
					)}
					<Button text={"AVANÇAR"} func={handleSubmit} />
					<hr className="border-white w-full my-5" />
				</div>
			</div>
		</div>
	);
}

export default SignUp;
