import React from "react";

function Form() {
	const data = [
		{
			id: "fullname",
			text: "NOME COMPLETO",
		},
		{
			id: "email",
			text: "EMAIL",
		},
		{
			id: "phone",
			text: "CELULAR",
		},
		{
			id: "password",
			text: "SENHA",
		},
	];

	const fields = data.map((e) => (
		<div className="flex flex-col w-full">
			<div className="flex flex-col w-full gap-1">
				<label htmlFor={e.id} className="text-white text-sm">
					{e.text}
				</label>
				<input
					id={e.id}
					type="text"
					className="text-midnight rounded-md h-8 px-2 border-silver border focus:outline-stdorange"
				/>
			</div>
		</div>
	));

	return fields;
}

export default Form;
