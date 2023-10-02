import React from 'react'
import ContactStyles from './ContactUs.module.css'
import SubmitButton from './SubmitButton'

export default function ContactUs() {
  return (
    <>
    <div className={ContactStyles.container}>
    <div className={ContactStyles.title}>Contact us for tryout</div>
        <div className={ContactStyles.container2}>
          <div className={ContactStyles.forms}>
            <input type="text" placeholder='Email' className={ContactStyles.input} />
            <input type="text" placeholder='Subject' className={ContactStyles.input} />
            <textarea name="Message" className={ContactStyles.textarea} placeholder='Message'></textarea>
            <SubmitButton/>
          </div>
        </div>
    </div>
    </>
  )
}
