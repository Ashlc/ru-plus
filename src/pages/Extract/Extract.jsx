import React from "react";
//import "primeicons/primeicons.css";

function Extract() {
	const extract = [
		{
			key: 1,
			meal: "LUNCH",
			date: "21/07",
			hour: "12:47",
		},
		{
			key: 2,
			meal: "LUNCH",
			date: "19/07",
			hour: "12:54",
		},
		{
			key: 3,
			meal: "LUNCH",
			date: "18/07",
			hour: "12:55",
		},
		{
			key: 4,
			meal: "LUNCH",
			date: "17/07",
			hour: "12:34",
		},
		{
			key: 5,
			meal: "LUNCH",
			date: "16/07",
			hour: "12:13",
		},
		{
			key: 6,
			meal: "LUNCH",
			date: "15/07",
			hour: "12:48",
		},
	];

	const fields = extract.map((e) => (
		<table
			key={e.key}
			className="table-auto w-full ml-5 border-separate border-spacing-y-2 border-spacing-x-2 text-sm">
			<tbody>
				<tr>
					<td className="font-medium">{e.meal}</td>
					<td className="">{e.date}</td>
					<td>{e.hour}</td>
				</tr>
			</tbody>
		</table>
	));
	return (
		<div className="h-fit pb-4 border border-silver rounded-2xl w-full">
			{/* TITLE */}
			<div className="relative flex w-full">
				<div className="flex pt-4 pl-5 gap-2 mb-2">
					<p className="text-stdblue font-bold text-md">EXTRATO</p>
					<p className="text-silver"> | </p>
					<p className="text-silver"> JULHO </p>
				</div>
				<i className="pi pi-arrow-circle-right absolute top-5 right-5 text-silver hover:text-stdblue" />
			</div>
			{fields}
		</div>
	);
}

export default Extract;
