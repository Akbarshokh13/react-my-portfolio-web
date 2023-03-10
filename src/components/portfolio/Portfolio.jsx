import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/port-web.png'
import IMG5 from '../../assets/notes-view.png'
import IMG6 from '../../assets/reactExpense.png'

const data = [
{
  id: 1,
  image: IMG1,
  title: 'Blurry Loading',
  github: 'https://github.com/Akbarshokh13/blurry-loading',

},
{
  id: 2,
  image: IMG2,
  title: 'Click To Move',
  github: 'https://github.com/Akbarshokh13/move-on-click',

},

{
  id: 3,
  image: IMG3,
  title: 'Image Magnifier',
  github: 'https://github.com/Akbarshokh13/image-magnifier' 

},
{
  id: 4,
  image: IMG4,
  title: 'React Portfolio Web',
  github: 'https://github.com/Akbarshokh13/react-my-portfolio-web', 
  demo: 'https://akbarshokh-u-pro.netlify.app/'
},
{
  id: 5,
  image: IMG5,
  title: 'React Notes App',
  github: 'https://github.com/Akbarshokh13/react-notes-app',
  demo: 'https://react-notes-app-project.netlify.app/'
},

{
  id: 6,
  image: IMG6,
  title: 'React Expense Tracker App',
  github: 'https://github.com/Akbarshokh13/expense-tracker-react-app',
  demo: 'https://react-expense-tracker-app-project.netlify.app/'
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