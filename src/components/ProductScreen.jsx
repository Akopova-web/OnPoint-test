import React from "react";
import { Home } from "./Home";
import plus from "./../images/plus.png";
import minus from "./../images/minus.png";
import bottle from "./../images/bottle.png";

export const ProductScreen = () => {
  const propCard = (icon, text) => {
    return (
      <div className="product-prop">
        <img src={icon} alt="" />
        <p>{text}</p>
      </div>
    );
  };
  return (
    <div className="product-screen">
      <Home />
      <img className="bottle-img" src={bottle} alt="" />
      <div className="content">
        <p>Ключевое сообщение</p>
        <h1>BrendXY</h1>
        <div className="content-box">
          <div className="product-screen__column">
            {propCard(
              minus,
              "Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies"
            )}
          </div>
          <div className="product-screen__column">
            {propCard(plus, "A arcu cursus vitae")}
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};
