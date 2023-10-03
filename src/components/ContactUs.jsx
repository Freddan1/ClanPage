import React from 'react'
import ContactStyles from './ContactUs.module.css'

export default function ContactUs() {
  return (
    <>
    <div className={ContactStyles.container}>
      <div className={ContactStyles.formContainer}>
        <div className={ContactStyles.text}>
          Contact us for tryout
          </div>
            <form action="#">
              <div className={ContactStyles.formRow}>
                <div className={ContactStyles.inputData}>
                  <input type="text" required/>
                  <div className={ContactStyles.underline}></div>
                  <label htmlFor="">First Name</label>
                </div>
                <div className={ContactStyles.inputData}>
                  <input type="text" required/>
                  <div className={ContactStyles.underline}></div>
                  <label htmlFor="">Last Name</label>
                </div>
              </div>
              <div className={ContactStyles.formRow}>
                <div className={ContactStyles.inputData}>
                  <input type="text" required/>
                  <div className={ContactStyles.underline}></div>
                  <label htmlFor="">Email Adress</label>
                </div>
              </div>
              <div className={ContactStyles.formRow}>
                <div className={ContactStyles.inputDataTextarea}>
                  <textarea cols="80" rows="8" required></textarea>
                  <div className={ContactStyles.underline}></div>
                  <label htmlFor=""> Write your message</label>
                  <br />
                </div>
              </div>
            </form>
          </div>
      </div>
    </>
  )
}
