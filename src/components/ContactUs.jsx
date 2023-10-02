import React from 'react'
import ContactStyles from './ContactUs.module.css'

export default function ContactUs() {
  return (
    <>
    <div className={ContactStyles.container}>
    <div className={ContactStyles.title}>Contact us for tryout</div>
        <div className={ContactStyles.container2}>
          <div className={ContactStyles.forms}>
            <input type="text" />
          </div>
        </div>
    </div>
    </>
  )
}
