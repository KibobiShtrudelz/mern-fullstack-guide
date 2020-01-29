import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";

const MainNavigation = props => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>

      <h1 className="main-navigatio__title">
        <Link to="/">Your places</Link>
      </h1>

      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
