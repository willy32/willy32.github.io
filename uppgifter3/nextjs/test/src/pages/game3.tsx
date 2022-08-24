import type { NextPage } from 'next';
import Link from "next/link";
import Image from 'next/image'
import styles from "./../styles/index.module.css";
import img1 from "../assets/pip.png";

const Game3: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image src={img1}/>
      <p>Get back to your nest and finish your nap in this retro-inspired platformer! Pip is a baby pelican that is startled from its sleep during a storm and must find its way back home. Collect the feathers scattered around the island until you have enough strength to flap back to your nest.</p>

      <Link href="/"><a className={styles.link}>- Back -</a></Link>
    </div>
  );
}

export default Game3;