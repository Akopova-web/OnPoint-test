import React from "react";
import { Home } from "./Home";
import arrow from "./../images/arrow-right_icon.png"

export const MainScreen = () => {
  return (
    <div className="main-screen">
      <Home />
      <div className="main-screen__textbox">
        <h2>Привет,</h2>
        <p>
          Это <strong>не</strong> коммерческое задание
        </p>
      </div>
      <span className="button-block">
        <button><img src={arrow} alt="" /></button>
        <span>Что дальше?</span>
      </span>
    </div>
  );
};
 