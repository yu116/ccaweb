import Link from 'next/link'
import utilStyles from '/styles/utils.module.css'
import Image from 'next/image'

function backend() {
    return (
        <div className={utilStyles.screen}>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            
            <div className={utilStyles.navBar}>
            
            <Link href="/"><a><Image src="/navlogo.jpg" alt="CSS Logo" width = "250px" height = "75px"/></a></Link>
            <Link href="/our-members"><a>Our Members</a></Link>
            
            
            <div className={utilStyles.dropdown}>
                <a className={utilStyles.dropdownBtn}>2021-2022 Activities/Courses</a>
                <div className={utilStyles.dropdownContent}>
                <Link href="/activities/ui-uxdesign">UI/UX Design </Link>
                <Link href="/activities/webandmobileappdevt">Web and Mobile App Development </Link>
                <Link href="/activities/backenddevt">Backend Development </Link>
                <Link href="/activities/competitiveprogramming">Competitive Programming </Link>
                <Link href="/activities/datasciandmachinelearning">Data Science and Machine Learning </Link>
                <Link href="/activities/incubatorprogramme">Incubator Programmes </Link>
               
                </div>
            </div>
            <Link href="/competitions"><a>Competitions</a></Link>
        </div>
            <section>
                <h1 className={utilStyles.h1}><b>Backend Development</b></h1>
                <div className={utilStyles.container}>
                {/* <img src="https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg" className={utilStyles.center}></img> */}
                </div>
                <div className={utilStyles.container}>
                    <p className={utilStyles.p}>
                        
                    Backend developers work behind the scenes. Without them, there would be nothing behind the scenes, in fact, the scene would simply be just that – a scene – with nothing else in front or behind it. The “scene” is brought across a flat plane lacking in dimensionality. The “scene” merely presents itself in breadth, spanning across a screen. Backend developers adds a dimension to any project – not only does the scene have breadth, but the presence of a “behind-the-scenes” gives depth – showcased in terms of creativity, innovation and good looks. Students explored NodeJS, Express, DBs and Auth through hands-on projects in this course.</p>
                    <p> Duration: 4 weeks</p>
                </div>

                <br></br>
            </section>

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

export default backend;