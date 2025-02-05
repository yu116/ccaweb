import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

function Recruitment() {
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

                <Link href="/recruitment"><a>Recruitment</a></Link>

                <Link href="/competitions"><a>Competitions</a></Link>
            </div>

            <section className = {utilStyles.screen}>
                <h1 className={utilStyles.h1}><b>Recruitment</b></h1>
                <p><b>Don’t have any past coding experience? Fret not! Our selection process is just a two-step survey to see if you are suitable for the CCA! You just have to show your will to be a part of our team! :D</b></p>

                <br></br>
            </section>

        </div>




    )
}

export default Recruitment;