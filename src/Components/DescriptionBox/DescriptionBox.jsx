import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (126)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Discover the charm of our handmade craft items. Every item is imbued
          with a story, reflecting artistic traditions of its creators. From
          vibrant colors to exquisite detailing. Whether you're seeking a
          thoughtful gift or a special addition to your home decor, our handmade
          craft items promise to inspire and delight.
        </p>
        <p>
          Indulge in the artistry of our handcrafted treasures, where every
          stitch, carve, and detail is infused with passion and dedication.
          Explore a world of artisanal elegance, where unique designs meet
          timeless craftsmanship, enriching your life with beauty, quality, and
          the essence of human touch.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
