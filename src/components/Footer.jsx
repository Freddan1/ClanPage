import React from 'react'
import FooterStyles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <ul className={FooterStyles.ul}>
       <a href='https://discord.gg/fn8wj9qH'> <FontAwesomeIcon icon={faDiscord} className={FooterStyles.dicon} /></a>
       <a href='#'> <FontAwesomeIcon icon={faFacebook} className={FooterStyles.dicon} /> </a>
       <a href='#'> <FontAwesomeIcon icon={faTwitter} className={FooterStyles.dicon} /> </a>
    </ul>
  )
}
