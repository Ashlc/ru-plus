import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Payment1 from "../pages/Payment/Payment1";
import Payment2 from "../pages/Payment/Payment2";
import PaymentFail from "../pages/Payment/FailedPayment";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/cadastro" element={<SignUp />} />
				<Route path="/home" element={<Home />} />
				<Route path="/payment1" element={<Payment1 />} />
				<Route path="/payment2" element={<Payment2 />} />
				<Route path="/paymentfail" element={<PaymentFail />} />				
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
