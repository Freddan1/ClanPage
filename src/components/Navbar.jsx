import React from "react";
import navBarStyles from "./navbar.module.css";
import logo from "../assets/slan.png";

export default function Navbar({handleScroll}) {
  const handleClick = (sectionId, event) => {
    event.preventDefault();
    handleScroll(sectionId);
  };
  
  return (
    <>
      <ul className={navBarStyles.ul}>
        
          <img src={logo} alt="Logo" className={navBarStyles.img} />
      
        <li className={navBarStyles.li}>
        <a href="#" onClick={(event) => handleClick("home", event)}>
            Home
          </a>
        </li>
        <li className={navBarStyles.li}>
        <a href="#" onClick={(event) => handleClick("members", event)}>
            Members
          </a>
        </li>
        <li className={navBarStyles.li}>
        <a href="#" onClick={(event) => handleClick("bangerContent", event)}>
            Banger Content
          </a>
        </li>
        <li className={navBarStyles.li}>
        <a href="#" onClick={(event) => handleClick("contact", event)}>
            Contact
          </a>
        </li>
        
      </ul>
    </>
  );
}
