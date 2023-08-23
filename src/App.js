import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing.jsx'
import Payment2 from './pages/Payment/Payment2.jsx'
import Payment1 from './pages/Payment/Payment1.jsx'
import PaymentFail from './pages/Payment/FailedPayment.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
        </Route>
        <Route path="/payment2" element={<Payment2 />}>
        </Route>
        <Route path="/payment1" element={<Payment1  />}>
        </Route>
        <Route path="/payment-fail" element={<PaymentFail  />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
