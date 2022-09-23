import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>lorem ipsum</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci urna, ultrices id laoreet vitae, pellentesque et diam. Sed eget aliquet nulla, non rutrum velit. Donec nec orci erat. Donec. " />
      </Head>

      <Header />

      <main className={styles.main}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nisi ipsum eaque eligendi laboriosam quidem maiores deserunt, sequi molestias beatae pariatur voluptatibus molestiae repudiandae modi aperiam? Vel qui tempore odit?</p>
      </main>
    </div>
  )
}

export default Home
