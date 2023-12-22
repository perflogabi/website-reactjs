export const calculateTotal = (cartItems) => {
    return parseFloat(
      cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0)
    ).toFixed(2);
  };