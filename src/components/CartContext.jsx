import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [],
  cartCount: 0,  // Adicione o estado para contagem do carrinho
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action.payload);
    // Adicione outros casos conforme necessário, como remover do carrinho, limpar carrinho, etc.
    default:
      return state;
  }
};

const addToCart = (state, newItem) => {
  const existingItem = state.cartItems.find((cartItem) => cartItem.id === newItem.id);

  if (existingItem) {
    // Se o item já existe no carrinho, atualize apenas a quantidade
    return {
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item
      ),
      cartCount: state.cartCount + newItem.quantity,
    };
  } else {
    // Se o item não existe, adicione-o ao carrinho com quantidade 1
    return {
      ...state,
      cartItems: [...state.cartItems, { ...newItem, quantity: newItem.quantity || 1 }],
      cartCount: state.cartCount + newItem.quantity,
    };
  }
};

// Função utilitária para calcular o total
const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0).toFixed(2);
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ ...state, calculateTotal, addToCart: (item) => dispatch({ type: 'ADD_TO_CART', payload: item }) }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return { ...context };
};

export { CartProvider, useCart };