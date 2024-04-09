import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image_url} alt="" />
          <img src={product.image_url} alt="" />
          <img src={product.image_url} alt="" />
          <img src={product.image_url} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image_url}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(126)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            Rs. {product.sticker_price}
          </div>
          <div className="productdisplay-right-price-new">
            Rs. {product.price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Elevate your surroundings with the timeless beauty and soulful
          craftsmanship of our artisanal treasures.
        </div>
        <div className="productdisplay-right-color">
          <h1>Select Colour</h1>
          <div className="productdisplay-right-colors">
            <div className="colour pink"></div>
            <div className="colour cyan"></div>
            <div className="colour green"></div>
            <div className="colour yellow"></div>
            <div className="colour navy"></div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add To Cart
        </button>
        <p className="productdisplay-right-category">
          <strong>Category :</strong>{" "}
          {product.category?.map((c) => (
            <span>{c}</span>
          ))}
        </p>
        <p className="productdisplay-right-category">
          <strong>Tags :</strong> <span>New</span> <span>Latest</span>{" "}
          <span>Refreshing</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
