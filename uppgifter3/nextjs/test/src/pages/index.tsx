import type { NextPage } from 'next';
import Link from "next/link";
import styles from "./../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Game Info</h1>
      <Link href="/game1"><a className={styles.link}>Minecraft</a></Link>
      <Link href="/game2"><a className={styles.link}>To A Starling</a></Link>
      <Link href="/game3"><a className={styles.link}>PIP</a></Link>
    </div>
  );
}

export default Home;
