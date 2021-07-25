import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'



export default function Home() {
  return (
    <div className={utilStyles.parent}>
      <div className={utilStyles.screen}>
        <Head>
          <title>RI CSS</title>
        </Head>
        <section className={utilStyles.headingMd}>

          {/* Top row of buttons */}
          <div className={utilStyles.subscreen}>
            <Link href="/about-us">
              <a className={utilStyles.btn}>
                About Us
              </a>
            </Link>

    
          <div className = {utilStyles.dropdown}>
            <button className = {utilStyles.btn}>2021-2022 Activities/Courses</button>
              <div className = {utilStyles.dropdowncontent}>
                <Link href="/activities/backenddevt"> 📦 Backend Development </Link>
                <Link href="/activities/competitiveprogramming"> 🔥 Competitive Programming </Link>
                <Link href="/activities/datasciandmachinelearning"> 🤖 Data Science and Machine Learning </Link>
                <Link href="/activities/incubatorprogramme"> 💭 Incubator Programmes </Link>
                <Link href="/activities/ui-uxdesign"> 🎨 UI/UX Design </Link>
                <Link href="/activities/webandmobileappdevt"> 📱 Web and Mobile App Development </Link>
              </div>
          </div>
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
    </div>
  )
}