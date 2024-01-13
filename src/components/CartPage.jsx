import React from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateTotal } from '../components/utils';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment');
  };

  const handleGoBack = () => {
    navigate(-1); // Volta uma página na história
  };

  return (
    <div className="   w-auto border shadow-md rounded-lg p-8 flex justify-center flex-col items-center">
      <div className=' border shadow-md py-8 px-8 rounded'>
        <h2 className=' font-bold text-3xl text-orange-400 py-4 shadow-lg text-center'>Carrinho de Compras</h2>
        <h3 className=' font-bold py-3'>Detalhes do Pedido</h3>


        {cartItems.length > 0 ? (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className=' py-2 '>
                  {item.name} : Quantidade: {item.quantity} , Preço: {item.price * item.quantity}
                </li>
              ))}
            </ul>

            <p className=' py-4 font-bold'>Total: {calculateTotal(cartItems)}</p>
            <button onClick={handleGoBack} className=' bg-orange-200 py-2 mb-6 mt-6 mr-2'>Adicionar mais itens</button>

            {/* Botão para ir para o pagamento */}
            <button onClick={handlePayment} className='bg-orange-500 text-white px-4 py-2 rounded-md hover:text-orange-700 hover:bg-orange-300 focus:outline-none focus:ring focus:border-blue-300 animate-pulse duration-1000'>Ir para o Pagamento</button>
          </div>
        ) : (
          <p>Carrinho vazio</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;