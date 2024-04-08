import React, { createContext, useEffect, useState } from "react";
// import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetch("https://30ec-117-211-249-155.ngrok-free.app/website/api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data.products);
      });

    if (localStorage.getItem("auth-token")) {
      fetch("https://30ec-117-211-249-155.ngrok-free.app/website/api/cart", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => {
          setCart(data);
          setCartItems(data?.items);
        });
    }
  }, []);

  const addToCart = (itemId) => {
    if (localStorage.getItem("auth-token")) {
      fetch("https://30ec-117-211-249-155.ngrok-free.app/website/api/add_to_cart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ product_id: itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const removeFromCart = (itemId) => {
    if (localStorage.getItem("auth-token")) {
      fetch("https://30ec-117-211-249-155.ngrok-free.app/website/api/remove_to_cart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id: itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    if(cart?.quantity){
      totalItems = cart.quantity;
    }
    return totalItems;
  };

  const getTotalCartAmount = () => {
    let totalAmout = 0;
    if(cart?.amount){
      totalAmout = cart.amount;
    }
    return totalAmout;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
