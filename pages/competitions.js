import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
function Competitions() {
    return (
    <div className={utilStyles.screen}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        
        <div className={utilStyles.navBar}>
                <Link href="/"><a><Image src="/navlogo.jpg" alt="CSS Logo" width = "250px" height = "75px"/></a></Link>
                
                <div className={utilStyles.dropdown}>
                    <a className={utilStyles.dropdownBtn}>2021-2022 Activities/Courses</a>
                    <div className={utilStyles.dropdownContent}>
                        <Link href="/activities/ui-uxdesign">UI/UX Design </Link>
                        <Link href="/activities/webandmobileappdevt">Web and Mobile App Development </Link>
                        <Link href="/activities/backenddevt">Backend Development </Link>
                        <Link href="/activities/competitiveprogramming">Competitive Programming </Link>
                        <Link href="/activities/datasciandmachinelearning">Data Science and Machine Learning</Link>
                        <Link href="/activities/incubatorprogramme">Incubator Programmes </Link>
                    </div>
                </div>

                <Link href="/competitions"><a>Competitions</a></Link>

                <Link href="/testimonials"><a>Testimonials</a></Link>

                <Link href="/contact-us"><a>Contact Us</a></Link>
        </div>
        
        <h1 className={utilStyles.h1}>Competitions</h1>
            <Image src="/noi.png" alt="National Olympiad in Informatics (NOI)" width = "500px" height = "200px"/>
            <p className={utilStyles.p}><b><u>NOI</u></b></p>
            <div className={utilStyles.container}>
                <p>The Singapore National Olympiad in Informatics (NOI) is modelled after the International Olympiad in Informatics (IOI), the ultimate international competition in computing (Informatics is the European term for computer science). NOI emphasises creativity in problem solving on the one hand, and programming skill and expertise on the other. The competition aims to spur interest in the school community of programming, and equip students with knowledge beyond that of a mere IT application user, in line with the national goal of creating an IT-savvy nation. NOI is hosted annually by the School of Computing of NUS.</p>
            </div>
            <br></br>
            <Image src="/whitehacks.jpeg" alt="Whitehacks" width = "500px" height = "200px"/>
            <p className={utilStyles.p}><b><u>SMU Whitehacks</u></b></p>
            <div className={utilStyles.container}>
                <p>WhiteHacks by SMU Whitehat Society is an introductory competition benchmarking cybersecurity potential. It is delivered in a series of challenges which the participating teams have to solve to claim points. The team with the highest score at the end will be the grand winner for the competition.</p>
            </div>      
            <br></br>
            <Image src="/brainhack.png" alt="BrainHack" width = "500px" height = "200px"/>
            <p className={utilStyles.p}><b><u>Brainhack</u></b></p>
            <div className={utilStyles.container}>
                <p>Organised by the Defence Science and Technology Agency (DSTA), BrainHack is a unique, hands-on experience into the swiftly evolving world of digital tech. Students get to experience the realms of cybersecurity, Artificial Intelligence (AI), space technologies, app development, fake news detection, extended reality and more!</p>
            </div>    
            <br></br>
            <br></br>
            
            <section className={utilStyles.footer}>
                <div className={utilStyles.footercontent}>
                    <div className={utilStyles.li}>
                        <span className="material-icons">place</span>
                        <Link href="http://www.ri.edu.sg/visit-us">
                        <a target="_blank" className={utilStyles.link}>Our Location</a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span className="material-icons">mail</span>
                        <Link href="mailto:cssrjc@gmail.com">
                        <a target="_blank" className={utilStyles.link}>cssrjc@gmail.com</a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span className="material-icons">alternate_email</span>
                        <Link href="https://www.instagram.com/rafflescss/">
                        <a target="_blank" className={utilStyles.link}>rafflescss</a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span className="material-icons">photo_camera</span>
                        <Link href="https://www.instagram.com/rafflescss/">
                        <a className={utilStyles.link}>Photos</a>
                        </Link>
                    </div>
                </div>

                <hr></hr>

                <p>&#169; 2021 Raffles Institution Computer Science Society</p>
            </section>
        </div>
    )
}

export default Competitions;
