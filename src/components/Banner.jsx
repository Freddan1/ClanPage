import React from 'react'
import CoverImage from '../assets/Cover_CS.jpeg'
import BannerStyles from './Banner.module.css'

export default function Banner() {
  return (
    <img src={CoverImage} alt="pic" className={BannerStyles.img} />
  )
}
