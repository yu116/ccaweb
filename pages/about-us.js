import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function AboutUs() {
    return (
        <div className={utilStyles.screen}>
            <section className={utilStyles.headingMd}>
                <h1 className={utilStyles.title}>About Us</h1>
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