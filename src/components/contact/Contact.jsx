import React from 'react'
import './contact.css'
import {FaTelegram} from 'react-icons/fa'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => { 
   e.preventDefault();

    emailjs.sendForm('service_inpkf2p', 'template_x6anfnr', form.current, 'jwXe1zg05CrItEAT5')
  
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
      <div className="contact__options">
      <article className="contact__option">
        <MdOutlineMailOutline className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>akbarshokh.u.pro@gmail.com</h5>
        <a href="mailto: akbarshokh.u.pro@gmail.com" target="_blank" >Send a message</a>
      </article>
      <article className="contact__option">
        <FaTelegram className='contact__option-icon'/>
        <h4>Telegram</h4>
        <h5>@akii_rd_01</h5>
        <a href="https://t.me/@akii_rd_01" target="_blank">Send a message</a>
      </article>
      <article className="contact__option">
        <BsFacebook className='contact__option-icon'/>
        <h4>Facebook</h4>
        <h5>akbarshokh_u</h5>
        <a href="https://www.facebook.com/profile.php?id=100088672488428&mibextid=ZbWKwL" target="_blank">Send a message</a>
      </article>
      </div>
      {/*End Of Contact option*/}

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact