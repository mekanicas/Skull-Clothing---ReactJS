import React from "react";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent.jsx";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../services/productsServices.js";
import imagenLogo from "./NavBarImages/skull.png";
import LinkInicio from "../StyledComponents/StyledLink.jsx";

const NavBarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <LinkInicio to="/">
        <img src={imagenLogo} alt="" />
      </LinkInicio>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="menu navbar-nav">
          <li className="nav-item">
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
            <ul className="submenu">
              <li>
                <a>React</a>
              </li>
              <li>
                <a>React</a>
              </li>
              <li>
                <a>React</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Work</a>
          </li>
        </ul>
      </div>
      <CartWidgetComponent />
    </nav>
  );
};

export default NavBarComponent;
