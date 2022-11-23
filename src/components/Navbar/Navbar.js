import React from "react";
import "./Navbar.css";
import mascot from "../../Images/lappy.png";
import menu from "../../Images/menu.png";

function Navbar() {
  return (
    <div className="navbar-div">
      <img className="hamburger-image" src={menu} alt="hamburger" />
      <div className="title-div">
        <h1 className="title"> BOOTCAMP BUDDY</h1>
      </div>
      <div>
        <img className="mascot-image" src={mascot} alt="mascot" />
      </div>
    </div>
  );
}

export default Navbar;
