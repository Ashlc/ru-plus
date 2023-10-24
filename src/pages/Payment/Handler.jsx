import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Handler() {
	const navigate = useNavigate();
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	/*O tempo vai ser em minutos só :)*/

	const time = currentTime.getHours() * 60 + currentTime.getMinutes();

	navigate("/pagamento/jantar");

	/*690 às 840 e das 1020 às 1170*/

	// if (time >= 690 && time <= 840) {
	// 	navigate("/pagamento", { state: { price: 3, mealType: "ALMOÇO" } });
	// } else if (time >= 1020 && time <= 1170) {
	// 	navigate("/pagamento/jantar");
	// } else {
	// 	navigate("/indisponivel");
	// }

	return (
		<div className="flex flex-col h-screen items-center justify-center">
			<i className="pi pi-spin pi-spinner text-silver text-3xl" />
		</div>
	);
}

export default Handler;
