import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

function aboutus() {
    return (
        <div className={utilStyles.screen}>
            <section className={utilStyles.headingMd}>

            <h1 className={utilStyles.title}>About Us</h1>
               <div className={utilStyles.container}>
              <p>
              Ever wanted to learn coding but not sure how to begin? We're a CCA filled with passionate individuals who believe in the power of technology in transforming our way of life for the better. We welcome students of all skill levels, from absolute beginners to programming experts. 
              We offer courses from <Link href="/activities/datasciandmachinelearning"> Data Science </Link>to <Link href="/activities/webandmobileappdevt">Web Development </Link>. If you are interested in creating websites or programming useful applications and games, then we invite you to join the Computer Science Society.
              </p>
              <p>
              Sessions held every Wednesday from 9 to 11am.
              </p>
              </div>

    
              <p><u><b>Exco 2021-2022</b></u></p>
              <Image src="/exco.png" alt="CSS Exco" width = "600px" height = "300px"/>

                <br></br>

                <div className={utilStyles.subscreen}>
                <Link href="/">
                <a className={utilStyles.btn}>
                    Back to Home
                </a>
                </Link>
                </div>
            </section>
        </div>
    )
}

export default aboutus;