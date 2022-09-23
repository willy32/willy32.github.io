import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Seo from '../components/Seo'
import Topbar from '../blocks/Topbar/Topbar'
//import styles from '../styles/IndexPage.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Seo title='Animals' description="A website about animals"></Seo>
      <Topbar></Topbar>
      Index
    </div>
  )
}

export default Home
