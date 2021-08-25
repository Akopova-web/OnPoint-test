import React from "react";
import { Home } from "./Home";
import plus from "./../images/plus.png";
import minus from "./../images/minus.png";

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
      <p>Ключевое сообщение</p>
      <h1>BrendXY</h1>
      <div>
        {propCard(
          minus,
          "Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies"
        )}
        {propCard(plus, "A arcu cursus vitae")}
      </div>
    </div>
  );
};
