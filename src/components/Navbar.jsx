// Navbar.js

import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import navBarStyles from "./navbar.module.css";
import logo from "../assets/slan.png";

export default function Navbar({ handleScroll }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = (sectionId, event) => {
    event.preventDefault();
    handleScroll(sectionId);
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={navBarStyles.navWrapper}>
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
        <div className={navBarStyles.toggleWrapper}>
          {toggle ? (
            <IoClose
              className={navBarStyles.toggleMenu}
              onClick={handleToggle}
            />
          ) : (
            <IoMenu
              className={navBarStyles.toggleMenu}
              onClick={handleToggle}
            />
          )}
        </div>
      </ul>
      {toggle && (
        <ul className={navBarStyles.hamburgerMenu}>
          <li>
            <a href="#" onClick={(event) => handleClick("home", event)}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => handleClick("members", event)}>
              Members
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => handleClick("bangerContent", event)}>
              Banger Content
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => handleClick("contact", event)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
