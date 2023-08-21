import "./SignUp.css";
import { React, useRef } from "react";
import Button from "../../components/Button/Button";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/tailwind-light/theme.css";

function Test() {
	const toast = useRef(null);

	const showMessage = (label, ref, severity) => {
		ref.current.show({
			severity: severity,
			summary: "Oops!",
			detail: label,
			life: 3000,
		});
	};

	const notChecked = () => {
		showMessage("You haven't agreed to the terms.", toast, "warn");
	};

	return (
		<div className="flex min-h-screen flex-col justify-center items-center w-full pt-10 bg-stdblue">
			<Toast ref={toast} className="text-sm w-full" />
			<Button text={"NEXT"} func={notChecked} />
		</div>
	);
}

export default Test;
