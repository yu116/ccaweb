import Link from 'next/link'
import utilStyles from '/styles/utils.module.css'
export default function incubator() {
    return (
        <div className={utilStyles.screen}>
        <section className={utilStyles.headingMd}>
            <h1 className={utilStyles.title}>Incubator programmes</h1>
            <div className={utilStyles.container}>
            <img src="https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg" className={utilStyles.center}></img>
            </div>
            <div className={utilStyles.container}>
                <p>
                    
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