import React from 'react'
import ContactStyles from './ContactUs.module.css'
import SubmitButton from './SubmitButton'

export default function ContactUs({id}) {
  return (
    <>
    <div className={ContactStyles.container }id={id}>
      <div className={ContactStyles.formContainer} >
        <div className={ContactStyles.text}>Contact us for tryout</div>
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
                <div className={ContactStyles.inputData}>
                  <textarea className={ContactStyles.textArea} cols="80" rows="8" required></textarea>
                  <br />
                  <div className={ContactStyles.underline1}></div>
                  <label htmlFor=""> Write your message</label>
                  <br />
                </div>
              </div>
                <SubmitButton/>
            </form>
          </div>
      </div>
    </>
  )
}
