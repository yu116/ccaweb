import Link from 'next/link'
import utilStyles from '/styles/utils.module.css'
function ui() {
    return (
        <div className={utilStyles.screen}>
        <section className={utilStyles.headingMd}>
            <h1 className={utilStyles.title}>UI-UX Design</h1>
            <div className={utilStyles.container}>
            <img src="https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg" className={utilStyles.center}></img>
            </div>
            <div className={utilStyles.container}>
                <p>    
                Have you ever wondered why your website doesn’t look good? This courses teaches you how to design websites and mobile apps professionally from scratch. No design background or “art skills” required!
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

export default ui;
