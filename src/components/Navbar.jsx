import React from "react";
import navBarStyles from "./navbar.module.css";
import logo from "../assets/slan.png";

export default function Navbar({handleScroll}) {

  
  return (
    <>
      <ul className={navBarStyles.ul}>
        
          <img src={logo} alt="Logo" className={navBarStyles.img} />
      
        <li className={navBarStyles.li}>
        <a href="#" onClick={() => handleScroll("home")}>
            Home
          </a>
        </li>
        <li className={navBarStyles.li}>
        <a href="#" onClick={() => handleScroll("members")}>
            Members
          </a>
        </li>
        <li className={navBarStyles.li}>
        <a href="#" onClick={() => handleScroll("contact")}>
            Contact
          </a>
        </li>
        <li className={navBarStyles.li}>
          <a href="#">About</a>
        </li>
      </ul>
    </>
  );
}
