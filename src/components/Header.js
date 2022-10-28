import React from "react";
import { NavLink } from "react-router-dom";
import "../Header.css";

function Header() {
  return (
    <div className="Nav">
      <nav className="Nav">
        <ul id="navlink">
        <NavLink className="link" to="/">
          {" "}
          Home {" "}
        </NavLink>
        <NavLink className="link" to="/hypercar">
          {" "}
          Hypercars {" "}
        </NavLink>
        <NavLink className="link" to="/sportycar">
          {" "}
          Sportcars {" "}
        </NavLink>
        <NavLink className="link" to="/mommycar">
          {" "}
          Mommy's Cars {" "}
        </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
