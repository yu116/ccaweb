import Head from 'next/head'
import { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div>
    <div className={utilStyles.screen}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd, utilStyles.screen}>
        <h1>Computer Science Society</h1>
        <p>description</p>
        <p>
          (test{' '}
          <a href="https://adfs.ri.edu.sg/adfs/ls/?SAMLRequest=fZJfT8IwFMXf%2FRRL37v%2FgDTbEoQYSVAXmD74Yrq1gyZbO3tblG%2FvGBoxRh57e3733HPbBGjbdGRmzU6u%2BZvlYJyPtpFAhosUWS2JoiCASNpyIKYim9n9ioSuTzqtjKpUg86QywQF4NoIJZGzXKTodTQOKfOvI1yx6QTH12WNSz8e4%2FEoKssongYl48h55hp6JkV9ix4EsHwpwVBp%2BpIfBtif4CAsghGJYhIGL8hZ9DmEpGagdsZ0QDyPshpcLVzOrAvb4eg14CFn9j3VXEmwLdcbrvei4k%2Fr1Q8t9oczuFFbIb1jYOTkX2u4EZIJub28gfIkAnJXFDnOHzcFypJjHzLk0tnR74%2FdURAm3rkuOb3cQ%2B%2BwXOSqEdXBuVW6peb%2FAQI3GCqC4XqQEiuh45WoBWf9HppGvc81p4anyGjLkZedTH%2F%2FkOzqEw%3D%3D&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=Gvt2gpiqak1fe%2FXPy5l9w1Lf%2BQEWzH%2FBOxI02er2%2B4zV3p69QFlcGdgw%2BzSVBJqqEmg46RRxYRFYm%2FCeM5GeUu5FEELxPCD2PcAkGrtEA1m04O2VkQm21Td7e2y%2BszuHCn25syPGv%2FUyK9lG7fgORNbP23D8xFWzMdWPcsnzL1vJmP%2FOGTssckVfJlT9EYkmSPVtHewLmE24U9rY9sbX84ec4P1Bkzb3erG0osnaslVk1rERKus5Y3gjEM4CTf%2FYFLkH7iviBNwCi%2BBnEY8f8VPLFuHOs%2FN9nTYZHK9gcSCbEKLTR5iYgBOvh%2Fe8MXc5EIs6lqhQF2Y5r1Fn5mb1vA%3D%3D">link</a>.)
        </p>
      </section>
    </div>

    <div>
      <p> Activities for CSS 2021-2022</p>
      <p> Backend Development </p>
      <p>Instead of command line applications, you’ll learn to program apps that anyone can access across the internet. This is the backbone of all online apps, mobile or web, and is what you’ll need to turn YOUR million dollar idea into reality. NodeJS, Express, DBs, Auth and Sockets are ALL on the cards.</p>
      <p> Competitive Programming </p>
      <p>Introduction to Informatics Olympiad 
        Algorithmic thinking 
        Simple classic algorithms and tricks
        Analysis of time and memory complexity </p>
      <p> Web and Mobile App Development </p>
      <p> Incubator Programmes</p>
      <p> UI/UX Design </p>
      <p>Have you ever wondered why your website doesn’t look good? This courses teaches you how to design websites and mobile apps professionally from scratch. No design background or “art skills” required!</p>
      <p> Data Science and Machine Learning </p>
    </div>
    </div>
  )
}