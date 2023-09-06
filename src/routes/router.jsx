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
import FailedPayment from "../pages/Payment/FailedPayment";
import ChooseMeal from "../pages/Payment/ChooseMeal";
import Extract from "../pages/Extract/Extract";
import Handler from "../pages/Payment/Handler";
import Confirmed from "../pages/Payment/Confirmed";
import DeleteAccount from "../pages/DeleteAccount/DeleteAccount";
import Redirect from "../pages/DeleteAccount/Redirect";
import Delete from "../pages/ConfirmDeletion/Delete";
import ClosedRU from "../pages/Payment/ClosedRU";
import ChangePassword from "../pages/ChangePassword/Change";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/cadastro" element={<SignUp />} />
				<Route path="/home" element={<Home />} />
				{/*<Route path="/pagamento" element={<Payment />} />*/}
				<Route path="/verificar" element={<Verify />} />
				<Route path="/recuperar" element={<Recover />} />
				<Route path="/inserir" element={<AddCredit />} />
				<Route path="/inserir/cartao" element={<InsertCreditCard />} />
				<Route path="/inserir/boleto" element={<Boleto />} />
				<Route path="/inserir/pix" element={<Pix />} />
				<Route path="/confirmar" element={<WaitingConfirmation />} />
				<Route path="/ClosedRU" element={<ClosedRU />} />
				<Route path="/usuario" element={<User />} />
				<Route path="/pagamento/erro" element={<FailedPayment />} />
				<Route path="/pagamento/confirmado" element={<Confirmed />} />
				<Route path="/pagamento/jantar" element={<ChooseMeal />} />
				<Route path="/extrato" element={<Extract />} />
				<Route path="/handler" element={<Handler />} />
				<Route path="/apagar/saque" element={<DeleteAccount />} />
				<Route path="/apagar" element={<Delete />} />
				<Route path="/tchauzinho" element={<Redirect />} />
				<Route path="/mudar-senha" element={<ChangePassword />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
