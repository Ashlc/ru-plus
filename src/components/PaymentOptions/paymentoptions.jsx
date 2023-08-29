import React, { useState } from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function PaymentOptions() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="p-2">
        <h3 className="text-[#005CA9] font-semibold text-sm">ESCOLHA UMA FORMA DE PAGAMENTO</h3>
      </div>
      <div className="m-2">
        <div className="payment-option font-medium text-[#2D3436] text-sm mb-2 flex items-center">
          <i
            className={`pi pi-circle ${selectedOption === 'pix' ? 'pi-circle-on' : ''} mr-2 items-center`}
            onClick={() => handleOptionChange('pix')}
          ></i>
          <label onClick={() => handleOptionChange('pix')}>PIX</label>
        </div>
        <div className="payment-option font-medium text-[#2D3436] text-sm mb-2 flex items-center">
          <i
            className={`pi pi-circle ${selectedOption === 'boleto' ? 'pi-circle-on' : ''} mr-2`}
            onClick={() => handleOptionChange('boleto')}
          ></i>
          <label onClick={() => handleOptionChange('boleto')}>BOLETO</label>
        </div>
        <div className="payment-option font-medium text-[#2D3436] text-sm mb-2 flex items-center">
          <i
            className={`pi pi-circle ${selectedOption === 'cartaoCredito' ? 'pi-circle-on' : ''} mr-2`}
            onClick={() => handleOptionChange('cartaoCredito')}
          ></i>
          <label onClick={() => handleOptionChange('cartaoCredito')}>CARTÃO DE CRÉDITO</label>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions;