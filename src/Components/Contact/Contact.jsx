import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useRef, useState } from "react"
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Contact = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const form = useRef();
    const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ibj9j3s', 'template_dfmxl8m', form.current, '4qOX8BviSvVVCNRlq')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className='contact-form' id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode ? "white" : ""}}>Entrer en contact</span>
                <span >Me contacter</span>
                <div className="blur s-blur1" style={{ background:"#ABF1FF94"}}>

                </div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit= {sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Nom' />
                <input type="email" name="user_email" className='user' placeholder='Email' />
                <textarea type="text" name="message" className='user' placeholder='Message' />
                <input type="submit" value="Send" name="" className='button' placeholder='Nom' />
                <span>{ done && "Thanks for contact in me!" }</span>
                <div className="blur c-blur1"
                    style={{background: "var(--purple)"}}
                >
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact