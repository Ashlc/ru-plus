import React from "react";
import "./Payment.css";
import QRCode from "../../assets/ProxyQRCode.png"
import Navigator from "../../components/Navigator/Navigator";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const mealType = "ALMOÇO";
  const price = 3.00;

  const handleClick = () => {
    navigate('/home');
  }

  return (
    <div className="flex justify-center w-full h-screen white-page">
      <Navigator />
      <div className="flex flex-col justify-center items-center text-center gap-7">
        <div className="flex flex-col justify-center items-center">
          {/*Tipo de comida e dinheiro*/}
          <p className="text-blue mulish-font">{mealType}</p>
          <p className="font-bold mulish-font big-text">
            <span className="text-concrete">R$ </span>
            {/*The monye is supposed to be in the INTER font, I didn't put it yet*/}
            <span className="text-gray font-weigt-700">{price.toFixed(2).replace('.', ',')}</span>
          </p>
        </div>
        <div className="gap-10 flex flex-col justify-center items-center">
          <div className="gap-5 flex flex-col justify-center items-center">
            {/*QR CODE*/}
            <img src={QRCode} className="qr-code-size" alt="Qr Code for payment." />
            <div className="flex flex-col justify-center items-center">
              {/*Texto explicativo*/}
              <p className="font-medium small-text mulish-font">APONTE O QR CODE PARA A CÂMERA PARA</p>
              <p className="font-medium small-text mulish-font">REALIZAR O PAGAMENTO</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            {/*Cancelar Transação*/}
            <button className="button-red mulish-font" onClick={handleClick}>CANCELAR TRANSAÇÃO</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Payment;