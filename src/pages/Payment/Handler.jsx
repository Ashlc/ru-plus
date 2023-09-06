import React, { useState, useEffect } from "react";
import Payment from "./Payment";
import ChooseMeal from "./ChooseMeal";
import ClosedRU from "./ClosedRU";

function Handler() {
	const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
	{/*O tempo vai ser em minutos só :)*/}
	const time = (currentTime.getHours() * 60) + currentTime.getMinutes()
	{/*690 às 840 e das 1020 às 1170*/}
	var meal = "lunch";
	if((time >= 690 && time <= 840 )){
		meal = "lunch";
	} else if ((time >= 1020 && time <= 1170 )){
		meal = "dinner";
	} else {
		meal = "ClosedRU";
	}
	if (meal === "lunch") {
		return (
			<div className="contents">
				<Payment price = {3} mealType = {"ALMOÇO"}/>
			</div>
		);
	}
	else if (meal === "dinner") {
		return (
			<div className="contents">
				<ChooseMeal />
			</div>
		);
	} else {
		return (
			<div className="contents">
				<ClosedRU />
			</div>
		);
	}
}

export default Handler;
