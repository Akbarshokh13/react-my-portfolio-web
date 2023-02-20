import React from 'react'
import './services.css'
import {BsCheck2Circle} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web development</h3>
          </div>
         
         <ul className='service__list'>
          <li>
            <BsCheck2Circle className='service__list-icon' />
            <p>Dynamic and Interactive web pages.</p>
          </li>
          <li>
            <BsCheck2Circle className='service__list-icon' />
            <p>Fast and customizable and component based apps.</p>
          </li>
          <li>
            <BsCheck2Circle className='service__list-icon' />
            <p>React Ecosystem.</p>
          </li>
         </ul>
        </article>
        {/*End of UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>
         
         <ul className='service__list'>
          <li>
            <BsCheck2Circle className='service__list-icon' />
            <p>Highly responsive cross-platform ios and android mobile apps.</p>
          </li>
          <li>
            <BsCheck2Circle className='service__list-icon' />
            <p>Connecting to cloud services.</p>
          </li>
          <li>
            <BsCheck2Circle className='service__list-icon' />
            <p>Component based and reusable fast applications.</p>
          </li>
          <li>
            <BsCheck2Circle className='service__list-icon' />
            <p> Well-structured front-end architecture, APIs.</p>
          </li>
         </ul>
        </article>
        {/*End of Mobile Development */}

        <article className='service'>
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
         
         <ul className='service__list'>
          <li>
            <BsCheck2Circle className='service__list-icon' />
            <p>Solid knowledge of Java.</p>
          </li>
          <li>
            <BsCheck2Circle className='service__list-icon' />
            <p>Manage the exchange of data between servers and users.</p>
          </li>
          <li>
            <BsCheck2Circle className='service__list-icon' />
            <p>Knowledge of Node JS.</p>
          </li>
          <li>
            <BsCheck2Circle className='service__list-icon' />
            <p>Deploy and maintain network applications.</p>
          </li>
         </ul>
        </article>
        {/*End of Backend Development*/}
      </div> 
    </section>
  )
}

export default Services