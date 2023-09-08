import React from "react";

function Select() {
	const months = [
		"JAN",
		"FEV",
		"MAR",
		"ABR",
		"MAI",
		"JUN",
		"JUL",
		"AGO",
		"SET",
		"OUT",
		"NOV",
		"DEZ",
	];

	const generateOptions = () => {
		return months.map((month) => (
			<option
				value={month}
				key={month}
				className="grow text-midnight text-sm rounded-md h-8 px-2 border-silver border checked:outline-stdorange">
				{month}
			</option>
		));
	};

	return (
		<select
			name="type"
			id="type"
			placeholder="Mês"
			className="text-midnight focus:rounded-md rounded-md h-8 px-4 border-silver border checked:outline-stdorange">
			{generateOptions()}
		</select>
	);
}

export default Select;
