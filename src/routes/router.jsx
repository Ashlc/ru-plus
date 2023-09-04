import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Payment from "../pages/Payment/Payment";
import Verify from "../pages/Verify/Verify";
import Recover from "../pages/RecoverPassword/Recover";
import AddCredit from "../pages/AddCredit/addcredit";
import InsertCreditCard from "../pages/InsertCreditCard/insertcreditcard";
import Pix from "../pages/Pix/pix";
import Boleto from "../pages/Boleto/boleto";
import WaitingConfirmation from "../pages/WaitingConfirmation/waitingconf";
import User from "../pages/User/User";
import Confirmation from "../pages/Confirmation/confirmation";


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
				<Route path="/inserir" element={<AddCredit />} />
				<Route path="/inserir/cartaoCredito" element={<InsertCreditCard />} />
				<Route path="/inserir/boleto" element={<Boleto />} />
				<Route path="/inserir/pix" element={<Pix />} />
				<Route path="/confirmar" element={<WaitingConfirmation />} />
				<Route path="/usuario" element={<User />} />
				<Route path="/confirmacao" element={<Confirmation />} />	
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
