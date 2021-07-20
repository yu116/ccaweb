import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 



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

          <h1 className={utilStyles.title, utilStyles.titlealt}>About Us</h1>

          <div className={utilStyles.container}>
            <p>
              We are Raffles Institution's Computer Science Society, a CCA filled with passionate individuals ready to learn about Computer Science! From Web Development to Data Science, our members are exposed to all realms of Computer Science. Think you are a great fit for our CCA? Read on and be inspired!
            </p>
          </div>

          <br></br>

          <a className={utilStyles.main} href="#main">
              Home
          </a>


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