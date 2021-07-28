import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'



export default function Home() {
  return (
    <div className={utilStyles.parent}>
      <div className={utilStyles.subscreen}>

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
          <Link href="/testimonials">
              <a className={utilStyles.btn}>Testimonials</a>
            </Link>
          
      </div>

  
          
          {/* Title */}
          <h1 className={utilStyles.title}>Computer Science Society</h1>

          {/* Bottom row of buttons */}
          <div className={utilStyles.subscreen}>
            
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
        <section className={utilStyles.headingMd}>
        <div className={utilStyles.testimonials}>
          <div className={utilStyles.slider}>
              <Link href="#slide-1" scroll={false}><a>1</a></Link>
              <Link href="#slide-2" scroll={false}><a>2</a></Link>
              <Link href="#slide-3" scroll={false}><a>3</a></Link>
              
              <div className={utilStyles.slides}>
                  <div name="slide-1" id="slide-1" className={utilStyles.slide}>
                      <blockquote>"I love CSS!"</blockquote>
                      <p>~ Member 1</p>
                  </div>
                  
                  <div name="slide-2" id="slide-2" className={utilStyles.slide}>
                      <blockquote>"I love CSS too!"</blockquote>
                      <p>~ Member 2</p>
                  </div>
                  
                  <div id="slide-3" className={utilStyles.slide}>
                      <blockquote>"I love CSS three!"</blockquote>
                      <p>~ Member 3</p>
                  </div>
              </div>
          </div>
        </div>
      </section>
      </div>
      

      

  )
}