import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing.jsx'
import Payment2 from './pages/Payment/Payment2.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
        </Route>
        <Route path="/payment" element={<Payment2 />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
