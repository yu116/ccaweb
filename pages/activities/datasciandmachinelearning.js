import Link from 'next/link'
import utilStyles from '/styles/utils.module.css'
function datasci() {
    return (
        <div className={utilStyles.screen}>
        <section className={utilStyles.headingMd}>
            <h1 className={utilStyles.title}>Data Science and Machine Learning</h1>
            <div className={utilStyles.container}>
            <img src="https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg" className={utilStyles.center}></img>
            </div>
            <div className={utilStyles.container}>

                    
        
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

export default datasci;