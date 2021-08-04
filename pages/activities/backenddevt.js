import Link from 'next/link'
import utilStyles from '/styles/utils.module.css'

function backend() {
    return (
        <div className={utilStyles.screen}>
        <section className={utilStyles.headingMd}>
            <h1 className={utilStyles.title}>Backend Development</h1>
            <div className={utilStyles.container}>
            <img src="https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg" className={utilStyles.center}></img>
            </div>
            <div className={utilStyles.container}>
                <p>
                    
                Instead of command line applications, you’ll learn to program apps that anyone can access across the internet. This is the backbone of all online apps, mobile or web, and is what you’ll need to turn YOUR million dollar idea into reality. NodeJS, Express, DBs, Auth and Sockets are ALL on the cards.</p>
                <p> Duration: 4 weeks</p>
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

export default backend;