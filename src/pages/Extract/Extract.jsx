import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import receipt from "../../assets/receipt.svg";
import "primereact/resources/themes/tailwind-light/theme.css";
import Select from "./Select";
import Back from "../../components/Back/Back";
import Navigator from "../../components/Navigator/Navigator";

function Extract() {
	const [month, setMonth] = React.useState(null);
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
		{
			key: 7,
			meal: "LUNCH",
			date: "21/07",
			hour: "12:47",
		},
		{
			key: 8,
			meal: "LUNCH",
			date: "19/07",
			hour: "12:54",
		},
		{
			key: 9,
			meal: "LUNCH",
			date: "18/07",
			hour: "12:55",
		},
		{
			key: 10,
			meal: "LUNCH",
			date: "17/07",
			hour: "12:34",
		},
		{
			key: 11,
			meal: "LUNCH",
			date: "16/07",
			hour: "12:13",
		},
		{
			key: 12,
			meal: "LUNCH",
			date: "15/07",
			hour: "12:48",
		},
		{
			key: 13,
			meal: "LUNCH",
			date: "21/07",
			hour: "12:47",
		},
	];

	return (
		<div className="h-screen w-full flex flex-col items-center gap-6 pt-10">
			<div className="flex w-11/12 gap-4 items-center overflow-scroll">
				<img src={receipt} alt="" className="h-7" />
				<p className="text-xl text-stdblue font-bold">EXTRATO</p>
			</div>
			<div className="flex flex-col w-11/12 gap-2">
				<hr className="w-full border-silver" />
				<div className="w-full gap-4 flex items-center justify-end">
					<p>PERÍODO</p>
					<Select />
				</div>
				<hr className="w-full border-silver" />
			</div>
			<DataTable
				value={extract}
				scrollable
				scrollHeight="65vh"
				className="h-fit w-11/12">
				<Column field="meal" header="REFEIÇÃO" />
				<Column field="date" header="DATA" />
				<Column field="hour" header="HORA" />
			</DataTable>
			<Navigator className="absolute bottom-0" />
		</div>
	);
}

export default Extract;
