import Head from 'next/head'
import { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={utilStyles.screen}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd, utilStyles.screen}>

        {/* Top row of buttons */}
        <div className={utilStyles.subscreen}>
          <a href="https://google.com">
            About Us
          </a>
          <a href="https://google.com">
            2021-2022 Activities/Courses
          </a>
        </div>

        {/* Title */}
        <h1>Computer Science Society</h1>
        
        {/* Bottom row of buttons */}
        <div className={utilStyles.subscreen}>
          <a href="https://google.com">
            Achievements
          </a>
          <a href="https://google.com">
            Competitions
          </a>
          <a href="https://google.com">
            Contact Us
          </a>
        </div>

      </section>
    </div>
  )
}