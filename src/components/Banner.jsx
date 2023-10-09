import React from 'react'
import CoverImage from '../assets/Cover_CS.jpeg'
import BannerStyles from './Banner.module.css'

export default function Banner() {
  return (
    <div className={BannerStyles.banner}>
    <img id='home' src={CoverImage} alt="pic" className={BannerStyles.imgg} />
    </div>
  )
}
