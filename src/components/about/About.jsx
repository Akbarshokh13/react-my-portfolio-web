import React from 'react'
import './about.css'
import ME from '../../assets/1676876531393.jpg'
import {FiAward} from 'react-icons/fi'
import {FaUsers} from 'react-icons/fa'
import {HiOutlineFolderOpen} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
       <div className="about__me-image">
        <img src={ME} alt="About Img" />
       </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <FiAward className='about__icon'/>  
            <h5>Experience</h5>
            <small>6+ Months Working</small>
          </article>

          <article className='about__card'>
          <FaUsers className='about__icon'/>  
            <h5>Clients</h5>
            <small>10+ Clients</small>
          </article>
           
          <article className='about__card'>
          <HiOutlineFolderOpen className='about__icon'/>  
            <h5>Projects</h5> 
            <small>5+ Completed Projects</small>
          </article>
        </div>
        <p>
          Hi, I am a Javascript developer specialised on react and react native. 
          I am a student of Computer Science at Sharda University. 
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    
    )

}

export default About