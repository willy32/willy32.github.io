import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Topbar from '../blocks/Topbar/Topbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={""}>
      <Topbar />
    </div>
  )
}

export default Home
