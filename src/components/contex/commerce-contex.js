import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";

export const CommerceContext = React.createContext();

const CommerceContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    console.log("initial productsFetch:", products);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
    console.log("initial cartFetch:", cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);

    setCart(response.cart);
    console.log("cart after item added:", cart);
  };

  const handleUpadteCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
    console.log("cart after handleUpdateCartQty:", cart);
  };

  const handleRemoveFromCard = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart);
    console.log("cart after line item removed", cart);
  };

  const handleEmptyCart = async () => {
    const response = commerce.cart.empty();

    setCart(response.cart);
    console.log("cart after handleEmptyCart", cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <CommerceContext.Provider
      value={{
        products: products,
        cart: cart,
        handleAddToCart: handleAddToCart,
        handleUpdateCartQty: handleUpadteCartQty,
        handleRemoveFromCard: handleRemoveFromCard,
        handleEmptyCart: handleEmptyCart,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};

export default CommerceContextProvider;
