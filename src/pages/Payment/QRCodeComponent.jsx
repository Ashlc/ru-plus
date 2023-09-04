import React from "react";
import QRCodeImage from "../../assets/ProxyQRCode.png";

function QRCodeComponent() {
  return (
    <div className="gap-10 flex flex-col justify-center items-center">
      <div className="gap-5 flex flex-col justify-center items-center">
        {/* QR CODE */}
        <img src={QRCodeImage} className="w-60 h-60" alt="Qr Code for payment." />
        <div className="flex flex-col justify-center items-center">
          {/* Texto explicativo */}
          <p className="font-medium text-xs text-midnight">APONTE O QR CODE PARA A CÂMERA PARA</p>
          <p className="font-medium text-xs text-midnight">REALIZAR O PAGAMENTO</p>
        </div>
      </div>
    </div>
  );
}

export default QRCodeComponent;