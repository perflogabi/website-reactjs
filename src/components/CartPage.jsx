import React from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateTotal } from '../components/utils';
import { useCart } from './CartContext';

const CartPage = () => {

  const { cartItems } = useCart();
  console.log("Cart Items:", cartItems);

  const navigate = useNavigate();

  const handlePayment = () => {
  
    navigate('/payment');
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>

      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - Quantidade: {item.quantity} - Preço: {item.price * item.quantity}
              </li>
            ))}
          </ul>

          <p>Total: {calculateTotal(cartItems)}</p>

          {/* Botão para ir para o pagamento */}
          <button onClick={handlePayment}>Ir para o Pagamento</button>
        </div>
      ) : (
        <p>Carrinho vazio</p>
      )}
    </div>
    
  );
};

export default CartPage;