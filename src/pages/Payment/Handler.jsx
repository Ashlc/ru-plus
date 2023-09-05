import React from "react";
import Payment from "./Payment";
import ChooseMeal from "./ChooseMeal";

function Handler() {
	const meal = "lunch";

	if (meal === "lunch") {
		return (
			<div className="contents">
				<Payment />
			</div>
		);
	}
	if (meal === "dinner") {
		return (
			<div className="contents">
				<ChooseMeal />
			</div>
		);
	}
}

export default Handler;
