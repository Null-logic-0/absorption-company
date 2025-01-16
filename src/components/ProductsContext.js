"use client";

const { createContext, useContext, useState } = require("react");

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (newProduct) => {
    setCartItems((prevProducts) => [...prevProducts, newProduct]);
    console.log(cartItems);
  };
  const removeProductFromCart = (productId) => {
    setCartItems((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
    console.log(cartItems);
  };

  const increaseQuantity = (productId) => {
    setCartItems((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      )
    );
  };
  const decreaseQuantity = (productId) => {
    setCartItems((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product
      )
    );
  };

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <ProductContext.Provider
      value={{
        cartItems,
        addProductToCart,
        removeProductFromCart,
        totalAmount,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
