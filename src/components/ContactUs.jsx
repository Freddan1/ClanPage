import React from 'react'
import ContactStyles from './ContactUs.module.css'
import SubmitButton from './SubmitButton'
import emailjs from '@emailjs/browser'
import { useState } from 'react';


export default function ContactUs({id}) {
  const [isPopupVisible, setPopupVisible] = useState(false)
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_774arth', 'template_a9f24d6', e.target, '4nUCQ-TwvO8xnooo_' )
    .then(() => {
      togglePopup();
    })
    .catch((error) => {
      console.log("Couldn't send email:", error)
    })
  }

  return (
    <>
    <div className={ContactStyles.container }id={id}>
      <div className={ContactStyles.formContainer} >
        <div className={ContactStyles.text}>Contact us for tryout</div>
            <form action="#" onSubmit={sendEmail}>
              {isPopupVisible && (
              <div className={ContactStyles.popup}>
                  <div className={ContactStyles.popupContent}>
                    <p>Email sent successfully! Thank you for contacting us.</p>
                    <button onClick={togglePopup}>Close</button>
                  </div>
              </div>
              )}
              <div className={ContactStyles.formRow}>
                <div className={ContactStyles.inputData}>
                  <input type="text" name='first_name' required/>
                  <div className={ContactStyles.underline}></div>
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className={ContactStyles.inputData}>
                  <input type="text" name='last_name' required/>
                  <div className={ContactStyles.underline}></div>
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div className={ContactStyles.formRow}>
                <div className={ContactStyles.inputData}>
                  <input type="text" name='email_from' required/>
                  <div className={ContactStyles.underline}></div>
                  <label htmlFor="email_from" name="email__from">Email Adress</label>
                </div>
              </div>
              <div className={ContactStyles.formRow}>
                <div className={ContactStyles.inputData}>
                  <textarea 
                  className={ContactStyles.textArea} 
                  cols="80" 
                  rows="8" 
                  required
                  name='message'
                  ></textarea>
                  <br />
                  <div className={ContactStyles.underline1}></div>
                  <label htmlFor="" id='message'> Write your message</label>
                  <br />
                </div>
              </div>
                <SubmitButton />
            </form>
          </div>
      </div>
    </>
  )
}
