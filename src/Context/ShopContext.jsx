import React, { createContext, useEffect, useState } from "react";
// import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetch("https://arteluxe.onrender.com/website/api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data.products);
      });

    if (localStorage.getItem("auth-token")) {
      fetch("https://arteluxe.onrender.com/website/api/cart", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
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
      fetch(
        "https://arteluxe.onrender.com/website/api/add_to_cart",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product_id: itemId }),
        }
      )
        .then((res) => res.json())
        .then(() => window.location.replace("/cart"));
    }
  };

  const removeFromCart = (itemId) => {
    if (localStorage.getItem("auth-token")) {
      fetch(
        "https://arteluxe.onrender.com/website/api/remove_from_cart",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product_id: itemId }),
        }
      )
        .then((res) => res.json())
        .then((data) => window.location.reload());
    }
  };

  const createOrder = () => {
    if (localStorage.getItem("auth-token")) {
      fetch(
        "https://arteluxe.onrender.com/website/api/orders",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      )
        .then((res) => res.json())
        .then((data) =>
          (data.order_ref
            ? window.location.replace(`/order/${data.order_ref}`)
            : alert("Oops something went wrong"))
        )
        .catch(() => alert("Oops something went wrong"));
    }
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    if (cart?.quantity) {
      totalItems = cart.quantity;
    }
    return totalItems;
  };

  const getTotalCartAmount = () => {
    let totalAmout = 0;
    if (cart?.amount) {
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
    createOrder
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
