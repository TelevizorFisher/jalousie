import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../logoSun.png";
import "../HeaderInfo/HeaderInfo.scss";

export default function HeaderInfo() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div class="header__menu menu">
          <nav class="menu__body">
            <ul class="menu__list">
              <li>
                <a href="#main-slider" class="menu__link __goto-block">
                  Щодня з 9-00 до 21-00
                </a>
              </li>
              <li>
                <a href="#lots" class="menu__link-1 _goto-block">
                  +380954756441
                </a>
              </li>
              <li>
                <a class="menu__clock"></a>
              </li>
              <li>
                <a class="menu__phone"></a>
              </li>
              <li>
                <a href="#lots" class="_goto-block"></a>
              </li>
              <li>
                <a href="#services" class="menu__link goto-block">
                  <span>Звяжіться з нами</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}

const Style = {
  padding: "7px 0px 0px 0px",
  width: "140px",
  height: "85px",
};
