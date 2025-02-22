import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import CartItemModal from "../components/CartItemModal.jsx";
import { data } from "../data/data.js";
import CartPage from "../components/CartPage.jsx";
import { useCart } from "./CartContext.jsx";

const TopFoods = () => {
  const {
    cartItems,
    setCartItems,
    cartCount,
    addToCart: contextAddToCart,
  } = useCart();
  const [originalData, setOriginalData] = React.useState(data);
  const [foods, setFoods] = useState(originalData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (item) => {
    console.log("Item antes de adicionar ao carrinho:", item);
    console.log("Quantidade antes de adicionar ao carrinho:", quantity);
    contextAddToCart({
      ...item,
      quantity: Number(quantity),
    });

    closeModal();
  };

  useEffect(() => {
    setFoods(originalData);
  }, [originalData]);

  const navigate = useNavigate();

  const openModal = (item) => {
    console.log("Open Modal:", item);
    setSelectedItem(item);
    console.log("Selected Item State:", selectedItem);
  };

  const closeModal = () => {
    console.log("Close Modal");
    setSelectedItem(null);
  };

  const filterType = (category) => {
    if (category === "todos") {
      setFoods(originalData);
    } else {
      setFoods(
        originalData.filter((item) => {
          return item.category === category;
        })
      );
    }
  };

  const goToCartPage = () => {
    // Navegar para a página do carrinho
    navigate("/cart");
  };

  const filterPrice = (price) => {
    setFoods(
      originalData.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] w-full px-8 py-12 mx-auto">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Mais avaliados
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filtro</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => filterType("todos")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Todos
            </button>
            <button
              onClick={() => filterType("burguer")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burguers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("bebidas")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Bebidas
            </button>
            <button
              onClick={() => filterType("sobremesa")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Sobremesa
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700">Filtrar Preços</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("20.00")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              20,00
            </button>
            <button
              onClick={() => filterPrice("40.00")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              40,00
            </button>
            <button
              onClick={() => filterPrice("60.00")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              60,00
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => openModal(item)}
                className="bg-orange-600 text-white border-none rounded-full text-2xl mb-2 hover:bg-orange-500"
              >
                <BsFillCartFill size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToCartPage}
        className="fixed bottom-4 right-4 bg-orange-600 text-white p-3 rounded-full hover:bg-orange-500"
      >
        <BsFillCartFill size={20} /> ({cartItems.length})
      </button>

      {selectedItem && (
        <CartItemModal
          item={selectedItem}
          closeModal={closeModal}
          handleAddToCart={handleAddToCart}
        />
      )}
      {console.log("Final Selected Item State:", selectedItem)}
    </div>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems
    .reduce((total, item) => total + item.quantity * parseFloat(item.price), 0)
    .toFixed(2);
};

export default TopFoods;
