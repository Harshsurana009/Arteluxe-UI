import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        <p></p>
      </div>
      <hr />
      {cartItems.map((p) => {
          return (
            <div>
              <div className="classitems-format cartitems-format-main">
                <img src={p?.product_image_url} alt="" className="carticon-product-icon" />
                <p>{p?.product_name}</p>
                <p>Rs. {p?.product_price}</p>
                <button className="cartitems-quantity">
                  {p?.quantity}
                </button>
                <p>Rs. {p?.amount}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(p.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div className="cartitems-total-invoice">
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>Rs. {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button onClick={()=>(alert('Invalid Code'))}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
