import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../logoSun.png";

export default function Navbar() {
  return (
    <nav className="">
      <div className="nav-center">
        <Link to="/">
          <img
            style={Style}
            src={logo2}
            alt="cocktail db logo"
            className="logo"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const Style = {
  padding: "7px 0px 0px 0px",
  width: "140px",
  height: "85px",
};
