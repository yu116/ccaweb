import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={utilStyles.parent}>
      <Head>
          <title>RI CSS</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
        
      <section className={utilStyles.container}>
        {/* Top row of buttons */}
        <div className={utilStyles.subscreen}>
          <Link href="/activities-courses">
            <a className={utilStyles.btn}>2021-2022 Activities/Courses</a>
          </Link>
        </div>
        
        {/* Title */}
        <h1 className={utilStyles.title}>Computer Science Society</h1>

        {/* Bottom row of buttons */}
        <div className={utilStyles.subscreen}>
          <Link href="/achievements">
            <a className={utilStyles.btn}>Achievements</a>
          </Link>

          <Link href="/competitions">
            <a className={utilStyles.btn}>Competitions</a>
          </Link>

          <Link href="/contact-us">
            <a className={utilStyles.btn}>Contact Us</a>
          </Link>
        </div>
      </section>

      <section className={utilStyles.headingMd}>
        <div className={utilStyles.about}>
          <h1 className={utilStyles.title}>About Us</h1>
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
      </section>

      <section className={utilStyles.headingMd}>
        <div className={utilStyles.testimonials}>
          <h1>Testimonials</h1>

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

      <section>
        <div className={utilStyles.footer}>
          <div className={utilStyles.footercontent}>
            <div className={utilStyles.image}>
              <Image src='/logo.png' alt="CCA Logo" width={400} height={400}/>
            </div>

            <ul className={utilStyles.ul}>
              <li className={utilStyles.li}>
                <span class="material-icons">place</span>
                <Link href="http://www.ri.edu.sg/visit-us">
                  <a target="_blank" className={utilStyles.link}>Our Location</a>
                </Link>
              </li>

              <li className={utilStyles.li}>
                <span class="material-icons">mail</span>
                <Link href="https://cssrjc@gmail.com">
                  <a target="_blank" className={utilStyles.link}>cssrjc@gmail.com</a>
                </Link>
              </li>
            </ul>

            <ul className={utilStyles.ul}>
              <li className={utilStyles.li}>
                <span class="material-icons">alternate_email</span>
                <Link href="https://www.instagram.com/rafflescss/">
                  <a target="_blank" className={utilStyles.link}>rafflescss</a>
                </Link>
              </li>

              <li className={utilStyles.li}>
                <span class="material-icons">laptop</span>
                <Link href="/activities-courses">
                  <a target="_blank" className={utilStyles.link}>Activities/Courses</a>
                </Link>
              </li>
            </ul>

            <ul className={utilStyles.ul}>
              <li className={utilStyles.li}>
                <span class="material-icons">emoji_events</span>
                <Link href="/competitions">
                  <a target="_blank" className={utilStyles.link}>Competitions</a>
                </Link>
              </li>

              <li className={utilStyles.li}>
                <span class="material-icons">photo_camera</span>
                <Link href="https://www.instagram.com/rafflescss/">
                  <a target="_blank" className={utilStyles.link}>Photos</a>
                </Link>
              </li>
            </ul>
          </div>

          <hr></hr>

          <p>Copyright &#169; 2021 Raffles Institution Computer Science Society</p>
          
        </div>
      </section>
    </div>
  )
}