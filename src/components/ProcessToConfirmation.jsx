import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProcessToConfirmation = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleConfirmationStage2 = () => {
    navigate('/confirmationStage2');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md p-6 rounded-md max-w-md w-full">
        <div>
          <h2 className="text-2xl font-bold mb-4">Confirmação dos Dados</h2>
          <p className="mb-4">Para realizar seu pedido, precisamos de algumas informações:</p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Seu número de celular:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Seu nome completo:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleConfirmationStage2}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:text-orange-700 hover:bg-orange-300 focus:outline-none focus:ring focus:border-blue-300 animate-pulse duration-1000"
          >
            Avançar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessToConfirmation;