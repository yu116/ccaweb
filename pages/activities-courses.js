import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function ActivitiesAndCourses() {
    return (
        <div className={utilStyles.container}>
            <h1 className={utilStyles.title}>2021-2022 Activities/Courses</h1>
            
            <p>📦 Backend Development</p>
            <p>🔥 Competitive Programming</p>
            <p>🤖 Data Science and Machine Learning</p>
            <p>💭 Incubator Programmes</p>
            <p>🎨 UI/UX Design</p>
            <p>📱 Web and Mobile App Development</p>

            <br></br>

            <div className={utilStyles.subscreen}>
                <Link href="/">
                    <a className={utilStyles.btn}>Back to Home</a>
                </Link>
            </div>
        </div>
    )
}