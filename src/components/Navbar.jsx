import React from 'react'
import navBarStyles from "./navbar.module.css"

export default function Navbar() {
  return (
    <ul className={navBarStyles.ul}>
      <li className={navBarStyles.li}><a href='#'>Home</a></li>
      <li className={navBarStyles.li}><a href='#'>News</a></li>
      <li className={navBarStyles.li}><a href='#'>Contact</a></li>
      <li className={navBarStyles.li}><a href='#'>About</a></li>
    </ul>
  )
}
