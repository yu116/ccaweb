import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import { siteTitle } from '../components/layout'


export default function Home() {

  return (

    <div className={utilStyles.parent}>
      <div id="main" className={utilStyles.screen}>
        <Head>
          <title>RI Computer Science Society</title>
        </Head>
        <section className={utilStyles.headingMd}>

          {/* Top row of buttons */}
          <div className={utilStyles.subscreen}>
            <a className={utilStyles.btn} href="#about-us">
              About Us
            </a>
            <a className={utilStyles.btn} href="#activities-courses">
              2021-2022 Activities/Courses
            </a>

           

           
          </div>

          {/* Title */}
          <h1 className={utilStyles.title}>Computer Science Society</h1>
          
          {/* Bottom row of buttons */}
          <div className={utilStyles.subscreen}>
            <a className={utilStyles.btn} href="#achievements">
              Achievements
            </a>
            <a className={utilStyles.btn} href="#competitions">
              Competitions
            </a>
            <a className={utilStyles.btn} href="#contact-us">
              Contact Us
            </a>
          </div>

        </section>
      </div>

      <div id="about-us" className={utilStyles.screen, utilStyles.screenalt}>
        <section className={utilStyles.headingMd}>

  
        <Head>
          <title>{siteTitle}</title>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,500;0,700;1,100;1,400&family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </Head>

     
        <h1 className={utilStyles.title, utilStyles.titlealt}> About Us </h1>
 
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
</section>
</div>


      <div id="activities-courses" className={utilStyles.screen, utilStyles.screenalt}>
        <section className={utilStyles.headingMd}>


        <div className={utilStyles.subscreen}>
            <a className={utilStyles.btn} href="">
              Backend Development
            </a>
            <a className={utilStyles.btn} href="">
              Competitive Programming

            </a>
            <a className={utilStyles.btn} href="">
              Data Science and Machine Learning
            </a>
          </div>

        <h1 className={utilStyles.activitiestitle}>2021-2022 Activities/Courses</h1>
        
        <div className={utilStyles.subscreen}>
            <a className={utilStyles.btn} href="">
              UI/UX Design
            </a>
            
            <a className={utilStyles.btn} href="">
              Incubator Programmes
            </a>
            <a className={utilStyles.btn} href="">
            Web and Mobile App Development
            </a>
          </div>

<br></br>
<br></br>
          <a className={utilStyles.main} href="#main">
             Home
          </a>
          </section>
          </div>

          <div id="contact-us" className={utilStyles.screen, utilStyles.screenalt}>
        <section className={utilStyles.headingMd}>

          <h1 className={utilStyles.title, utilStyles.titlealt}>Contact Us</h1>

          <div className={utilStyles.container}>
            <p>
              
            </p>
          </div>

          <br></br>

          <a className={utilStyles.main} href="#main">
              Home
          </a>


        </section>
      </div>


      <div id="competitions" className={utilStyles.screen, utilStyles.screenalt}>
        <section className={utilStyles.headingMd}>

          <h1 className={utilStyles.title, utilStyles.titlealt}> Competitions </h1>

          <div className={utilStyles.container}>
            <p>  
            <ul> 
             <li>National Olympiad in Informatics (NOI)</li>
             <li>Whitehacks</li>
             <li>Cyber Defenders Discovery Camp by DSTA.</li>
             
            </ul>
              
            </p>
          </div>

          <br></br>

          <a className={utilStyles.main} href="#main">
              Home
          </a>


        </section>
      </div>

    </div>

    
  )
}