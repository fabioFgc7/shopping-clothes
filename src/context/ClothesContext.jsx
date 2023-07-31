import { createContext, useContext, useState } from "react";

import propTypes from "prop-types";
const Context = createContext();
const useClothes = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useTask must be used within a TaskContext");
  }
  return context;
};

const ClothesContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isActiveBorder, setIsActiveBorder] = useState(false);
  const [active, setActive] = useState(false);
  const [countProducts, setCountProducts] = useState(0);

  const handleAddToCart = (ropaToAdd) => {
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.id === ropaToAdd.id &&
        item.selectedSize === ropaToAdd.selectedSize &&
        item.clothesImages === ropaToAdd.clothesImages
    );
    if (ropaToAdd.selectedSize === undefined) {
      setIsActiveBorder(true);

      setTotal(0);
      setCountProducts(0);
      setCartItems([]);
    } else {
      setIsActiveBorder(false);
      if (existingItemIndex !== -1) {
        // El elemento ya está en el carrito, actualiza su cantidad
        const updatedCartItems = cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setTotal(total + ropaToAdd.price);
        setCountProducts(countProducts + 1);
        setCartItems(updatedCartItems);
      } else {
        // El elemento no está en el carrito, agrégalo con cantidad 1
        setTotal(total + ropaToAdd.price);
        setCountProducts(countProducts + 1);
        setCartItems([...cartItems, { ...ropaToAdd, quantity: 1 }]);
      }
    }
  };

  const handleDeleteItems = (itemToDelete) => {
    const { id, selectedSize } = itemToDelete;

    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === id && item.selectedSize === selectedSize
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) =>
        index === existingItemIndex
          ? item.quantity === 1
            ? null // Si la cantidad es 1, marcamos el elemento como nulo para eliminarlo después
            : { ...item, quantity: item.quantity - 1 } // Si la cantidad es mayor que 1, restamos 1 a la cantidad
          : item
      );

      const remainingItems = updatedCartItems.filter((item) => item !== null);

      const newCountProducts = remainingItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

      const newTotal = remainingItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      setCountProducts(newCountProducts);
      setCartItems(remainingItems);
      setTotal(newTotal);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
    setCountProducts(0);
    setActive(false);
  };
  return (
    <Context.Provider
      value={{
        handleAddToCart,
        cartItems,
        handleDeleteItems,
        total,
        countProducts,
        active,
        setActive,
        clearCart,
        isActiveBorder,
        setIsActiveBorder,
      }}>
      {children}
    </Context.Provider>
  );
};

ClothesContext.propTypes = {
  children: propTypes.node.isRequired,
};
export { useClothes, ClothesContext };
