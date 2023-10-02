import React from "react";
import navBarStyles from "./navbar.module.css";
import logo from "../assets/slan.png";

export default function Navbar() {
  return (
    <>
      <ul className={navBarStyles.ul}>
        
          <img src={logo} alt="Logo" className={navBarStyles.img} />
      
        <li className={navBarStyles.li}>
          <a href="#">Home</a>
        </li>
        <li className={navBarStyles.li}>
          <a href="#">News</a>
        </li>
        <li className={navBarStyles.li}>
          <a href="#">Contact</a>
        </li>
        <li className={navBarStyles.li}>
          <a href="#">About</a>
        </li>
      </ul>
    </>
  );
}
