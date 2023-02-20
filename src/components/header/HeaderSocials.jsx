import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
    <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
    <a href="https://github" target="_blank"><ImGithub/></a>
    <a href="https://instagram.com" target="_blank"><BsInstagram/></a> 
    </div>
  ) 
}

export default HeaderSocials