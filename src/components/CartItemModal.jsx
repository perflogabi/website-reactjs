import React, { useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import "./cartItemModal.css"
import { useCart } from './CartContext.jsx';

const CartItemModal = ({ item, closeModal }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity: Number(quantity) }); // Certifique-se de converter a quantidade para um número
    closeModal();
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='close-button' onClick={closeModal}>
          Fechar
        </button>
        <img src={item.image} alt={item.name} className='modal-image' />
        <div className='modal-details'>
          <p className='modal-title'>{item.name}</p>
          <p className='modal-description'>{item.description}</p>
          <p className='modal-price'>
            <span>{item.price}</span>
          </p>
        </div>
        <div className='quantity-container'>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button onClick={handleAddToCart} className='add-to-cart-button'>
          Adicionar ao Carrinho 
        </button>
      </div>
    </div>
  );
};

export default CartItemModal;