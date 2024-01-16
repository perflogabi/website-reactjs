import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const { cartItems, calculateTotal } = useCart();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleProceedToConfirmation = () => {
    navigate('/confirmation');
    // Aqui você pode realizar a lógica necessária antes de avançar para a confirmação
    // Pode validar os dados, calcular custos adicionais, etc.
    // Em seguida, você pode passar para a página de confirmação com os dados necessários.
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md p-6 rounded-md max-w-md w-full">
        {/* Card dos Itens do Carrinho */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Itens do Carrinho</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-2">
                {item.name} - Quantidade: {item.quantity} - Preço: R${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p className="mt-2 font-bold">Total: R${calculateTotal(cartItems)}</p>
        </div>

        {/* Card para Avançar para Confirmação */}
        <div>
          <button
            onClick={handleProceedToConfirmation}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:text-orange-700 hover:bg-orange-300 focus:outline-none focus:ring focus:border-blue-300 animate-pulse duration-1000"
          >
            Avançar - Total: R${calculateTotal(cartItems)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;