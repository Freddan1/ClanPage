import React from 'react'
import CoverImage from '../assets/Cover_CS.jpeg'
import BannerStyles from './Banner.module.css'
import {motion} from 'framer-motion'

export default function Banner() {
  return (
    <div className={BannerStyles.banner}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img id='home' src={CoverImage} alt="pic" className={BannerStyles.img} />
      </motion.div>
    </div>
  );
}
