import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import { utils } from 'elliptic'

export default function Home() {
  return (
    <div className={utilStyles.parent}>
      <div id="main" className={utilStyles.screen}>
        <Head>
          <title>RI CSS</title>
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
              💭 "The ultimate promise of technology is to make us masters of a world that we command by the push of a button"
            </p>
            <p>
              👤 a CCA filled with passionate individuals who believe in the power of technology in transforming our way of life for the better
            </p>
            <p>
              🗓 Sessions held every Wednesday from 9 to 11am
            </p>
            <p>
              🎓 Offers courses from Data Science to Web Development
            </p>
            <p>
              🏆 Organises and participates in competitions and hackathons
            </p>
          </div>

          <br></br>

          <a className={utilStyles.btn} href="#main">
              Back to Main Screen
          </a>

        </section>
      </div>
    </div>
  )
}