import React from "react";
import receipt from "../../assets/receipt.svg";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeicons/primeicons.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import { extract } from "./data.js";
import Navigator from "../../components/Navigator/Navigator";

function Extract() {
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

	const options = months.map((month, index) => {
		return (
			<option key={index} value={index + 1}>
				{month}
			</option>
		);
	}, []);

	return (
		<div className="relative h-screen w-full flex flex-col">
			<div className="flex flex-col p-6 h-full w-full gap-2">
				<div className="flex items-center gap-3 tall:gap-4 mb-3 tall:mt-3">
					<img src={receipt} alt="Extrato" className="h-8" />
					<p className="text-stdblue text-xl font-bold">EXTRATO</p>
				</div>
				<hr className="border-silver" />
				<div className="flex items-center justify-between px-6">
					<p className="text-silver">PERÍODO</p>
					<select name="Meses" id="month" className="px-2">
						{options}
					</select>
				</div>
				<hr className="border-silver tall:mb-3" />
				<DataTable
					value={extract}
					scrollable
					scrollHeight="70vh"
					className="w-full">
					<Column field="meal" header="REFEIÇÃO" />
					<Column field="date" header="DATA" />
					<Column field="hour" header="HORA" />
				</DataTable>
			</div>
			<Navigator />
		</div>
	);
}

export default Extract;
