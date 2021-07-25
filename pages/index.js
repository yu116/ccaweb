import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

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
            <Link href="/about">
              <a className={utilStyles.btn}>
                About Us
              </a>
            </Link>

            <Link href="/activities-courses">
              <a className={utilStyles.btn}>
                2021-2022 Activities/Courses
              </a>
            </Link>
          </div>
          
          {/* Title */}
          <h1 className={utilStyles.title}>Computer Science Society</h1>

          {/* Bottom row of buttons */}
          <div className={utilStyles.subscreen}>
            <Link href="/achievements">
              <a className={utilStyles.btn}>
                Achievements
              </a>
            </Link>

            <Link href="/competitions">
              <a className={utilStyles.btn}>
                Competitions
              </a>
            </Link>

            <Link href="/contact-us">
              <a className={utilStyles.btn}>
                Contact Us
              </a>
            </Link>
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