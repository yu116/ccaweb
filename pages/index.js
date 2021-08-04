import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={utilStyles.parent}>
      <div className={utilStyles.screen}>
        <Head>
          <title>RI CSS</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>
        
        <section className={utilStyles.headingMd}>
          {/* Top row of buttons */}
          <div className={utilStyles.subscreen}>  
            <Link href="/aboutus">
              <a className={utilStyles.btn}>About Us</a>
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

            <Link href="/competitions">
              <a className={utilStyles.btn}>Competitions</a>
            </Link>
          </div>
          
          {/* Title */}
          <h1 className={utilStyles.title}>Computer Science Society</h1>

          {/* Bottom row of buttons */}
          <div className={utilStyles.subscreen}>
            <Image src="/ai.png" alt="CSS Group Photo" width = "500px" height = "300px"/>
            <Image src="/webdevt.png" alt="CSS Group Photo" width = "400px" height = "300px"/>
          </div>
        </section>
      </div>

      <section className={utilStyles.testimonials}>
        <h2>Testimonials</h2>
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
      </section>

      <section className={utilStyles.footer}>
          <div className={utilStyles.footercontent}>
              <div className={utilStyles.li}>
                <span class="material-icons">place</span>
                <Link href="http://www.ri.edu.sg/visit-us">
                  <a target="_blank" className={utilStyles.link}>Our Location</a>
                </Link>
              </div>

              <div className={utilStyles.li}>
                <span class="material-icons">mail</span>
                <Link href="mailto:cssrjc@gmail.com">
                  <a target="_blank" className={utilStyles.link}>cssrjc@gmail.com</a>
                </Link>
              </div>

              <div className={utilStyles.li}>
                <span class="material-icons">alternate_email</span>
                <Link href="https://www.instagram.com/rafflescss/">
                  <a target="_blank" className={utilStyles.link}>rafflescss</a>
                </Link>
              </div>

              <div className={utilStyles.li}>
                <span class="material-icons">photo_camera</span>
                <Link href="https://www.instagram.com/rafflescss/">
                  <a className={utilStyles.link}>Photos</a>
                </Link>
              </div>
          </div>

          <hr></hr>

          <p>Copyright &#169; 2021 Raffles Institution Computer Science Society</p>
      </section>
    </div>
  )
}
