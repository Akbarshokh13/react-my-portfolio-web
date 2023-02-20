import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (

    <footer>

   <a href="#" className='footer__logo'>Akbarshokh</a>
   <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
   </ul>

<div className="footer__socials">
    <a href="https://facebook.com"><BsFacebook/></a>
    <a href="https://instagram.com"><FiInstagram/></a>
   </div>

   <div className="footer__copyright">
    <small>&copy; Thanks for Egator Tutorials. All rights reserved</small>
   </div>
    </footer>
  )
}

export default Footer