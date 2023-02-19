import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'
import Navbar from '@/comps/NavBar'
import Footer from '@/comps/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja list | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div >

        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolores quae deserunt beatae natus at voluptate quas impedit pariatur rerum.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolores quae deserunt beatae natus at voluptate quas impedit pariatur rerum.</p>
        <Link href='/ninjas' className={styles.btn}>See Ninja Listing</Link>

      </div>
    </>
  )
}
