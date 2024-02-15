"use client";
const { createContext, useState } = require("react");

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (data) => {
    setCart((prev) => [...prev, data]);
  };
  const deleteCart = (id) => {
    cart.filter((el) => el.id !== id);
  };

  const value = {
    cart,
    addCart,
    deleteCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
