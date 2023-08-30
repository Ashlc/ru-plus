import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Payment from "../pages/Payment/Payment";
import Verify from "../pages/Verify/Verify";
import Recover from "../pages/RecoverPassword/Recover";
import AddCreditCard from "../pages/AddCredit-Card/addcredit-card";
import InsertCreditCard from "../pages/InsertCreditCard/insertcreditcard";
import WaitingConfirmation from "../pages/WaitingConfirmation/waitingconf";
import User from "../pages/User/User";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/cadastro" element={<SignUp />} />
				<Route path="/home" element={<Home />} />
				<Route path="/pagamento" element={<Payment />} />
				<Route path="/verificar" element={<Verify />} />
				<Route path="/recuperar" element={<Recover />} />
				<Route path="/addcredit" element={<AddCreditCard />} />
				<Route path="/inserir-cartao" element={<InsertCreditCard />} />
				<Route
					path="/aguardando-confirmacao"
					element={<WaitingConfirmation />}
				/>
				<Route path="/usuario" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
