import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import brand_logo from "../Assets/brand-logo.png";
import cart from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../Assets/nav_dropdown_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef?.current?.classList?.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={brand_logo} alt=""></img>
        {/* <p>Arteluxe</p> */}
      </div>

      <img
        onClick={dropdown_toggle}
        className="nav-dropdown"
        src={dropdown_icon}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link className="nav-link" to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("magnets")}>
          <Link className="nav-link" to="/magnets">
            Magnets
          </Link>
          {menu === "magnets" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("gift_items")}>
          <Link className="nav-link" to="/gift_items">
            Gift Items
          </Link>
          {menu === "gift_items" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("chocolates")}>
          <Link className="nav-link" to="/chocolates">
            Chocolates
          </Link>
          {menu === "chocolates" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("personalised_items")}>
          <Link className="nav-link" to="/personalised_items">
            Personalised Items
          </Link>
          {menu === "personalised_items" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart} alt=""></img>
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
