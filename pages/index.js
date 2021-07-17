import Head from 'next/head'
import { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div>
      <div className={utilStyles.screen}>
        <Head>
          <title>{siteTitle}</title>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,500;0,700;1,100;1,400&family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </Head>
      </div>

      <div className={utilStyles.about}>
        <div className={utilStyles.aboutHeading}>
          <i className='material-icons'>code</i>
          <h1>About Us</h1>
          <i className='material-icons'>code</i>
        </div>

        <blockquote>
          "The ultimate promise of technology is to make us master of a world that we command by the push of a button."
        </blockquote>
        
        <p>
          We are Raffles Institution's Computer Science Society (CSS), a CCA filled with passionate individuals who believe in the power of technology and computing in transforming our way of life for the better. 
          
          <br/><br/>

          At CSS, our members are exposed to all realms of Computer Science through enriching courses from Data Science to Web Development. Lessons start from the very basics and no prior programming experience is required. 
          We welcome students of all skill levels, from absolute beginners to programming experts. 
          
          <br/><br/>

          Joining CSS also offers members opportunities to participate in many exciting competitions such as the National Olympiad of Informatics (NOI) and the International Olympiad in Informatics (IOI). 
          There are also hackathons, where participants build a prototype of an app or idea in 24 hours as a team. 
          These competitions test members' ability to think outside of the box and apply programming skills in creative scenarios, allowing them to gain deeper insights into many algorithmic and technical aspects of programming. 
          
          <br/><br/>
          
          Sessions are typically once a week, 9am to 11am on Wednesdays. 
          
          <br/><br/>

          Think you are a great fit for our CCA? Read on and be inspired!
        </p>
      </div>
    </div>
  )
}