import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'

const data = [
{
  id: 1,
  image: IMG1,
  title: 'Image Changer',
  github: 'https://github.com/Akbarshokh13/Image-changer',
  demo: 'https://dribbble.com/shots/20676490-Vitamin-Reminder-Mobile-IOS-App?utm_source=Clipboard_Shot&utm_campaign=purrwebui&utm_content=Vitamin%20Reminder%20Mobile%20IOS%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=purrwebui&utm_content=Vitamin%20Reminder%20Mobile%20IOS%20App&utm_medium=Social_Share' 
 
},
{
  id: 2,
  image: IMG2,
  title: 'click move',
  github: 'https://github.com/Akbarshokh13/move-on-click',
  demo: 'https://dribbble.com/shots/20681639-Mobile-Streaming-App?utm_source=Clipboard_Shot&utm_campaign=metacarbon&utm_content=Mobile%20Streaming%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=metacarbon&utm_content=Mobile%20Streaming%20App&utm_medium=Social_Share' 
 
},

{
  id: 3,
  image: IMG3,
  title: 'Dribble',
  github: 'https://github.com', 
  demo: 'https://dribbble.com/shots/20681639-Mobile-Streaming-App?utm_source=Clipboard_Shot&utm_campaign=metacarbon&utm_content=Mobile%20Streaming%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=metacarbon&utm_content=Mobile%20Streaming%20App&utm_medium=Social_Share' 
},
{
  id: 4,
  image: IMG4,
  title: 'Move on Click',
  github: 'https://github.com', 
  demo: 'https://dribbble.com/shots/20678641-Matter-Course-Dark-Mode-E-Course-Mobile-App-Concept?utm_source=Clipboard_Shot&utm_campaign=ihyaet&utm_content=Matter%20Course%20%5BDark%20Mode%5D%20-%20E-Course%20Mobile%20App%20Concept&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=ihyaet&utm_content=Matter%20Course%20%5BDark%20Mode%5D%20-%20E-Course%20Mobile%20App%20Concept&utm_medium=Social_Share' 
},
{
  id: 5,
  image: IMG5,
  title: 'Image Changer',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/20677808-Crypto-Finance-App?utm_source=Clipboard_Shot&utm_campaign=awsmd&utm_content=Crypto%20Finance%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=awsmd&utm_content=Crypto%20Finance%20App&utm_medium=Social_Share' 
}

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'> 
         <div className="portfolio__item-image">
          <img src= {image} alt={title} />
         </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article> 
         )
          })
        }
     </div>
    </section>
  )
}

export default Portfolio