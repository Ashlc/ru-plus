import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Payment from "../pages/Payment/Payment";
import Payment2 from "../pages/Payment/Payment2";
import ChooseMeal from "../pages/Payment/ChooseMeal";
import Verify from "../pages/Verify/Verify";
import Recover from "../pages/RecoverPassword/Recover";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/cadastro" element={<SignUp />} />
				<Route path="/home" element={<Home />} />
				<Route path="/pagar" element={<Payment />} />
				<Route path="/pagar2" element={<Payment2 />} />
				<Route path="/escolhe" element={<ChooseMeal />} />
				<Route path="/verificar" element={<Verify />} />
				<Route path="/recuperar" element={<Recover />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
