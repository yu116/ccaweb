import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Competitions() {
    return (
        <div id="activities-courses" className={utilStyles.screen}>
            <section className={utilStyles.headingMd}>
            <h1 className={utilStyles.title}>Competitions</h1>
                <div className={utilStyles.container}>
                    <p>
                    🤯 National Olympiad in Informatics (NOI)
                    </p>
                    <p>
                    👩‍💻 Whitehacks
                    </p>
                    <p>
                    👮‍♂️ Cyber Defenders Discovery Camp
                    </p>
                    <p>
                    and many more!
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