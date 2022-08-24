import type { NextPage } from 'next';
import Link from "next/link";
import Image from 'next/image'
import styles from "./../styles/index.module.css";
import img1 from "../assets/toastarling.png";

const Game2: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image src={img1}/>
      <p>A cool little platformer where you can use your your teleportation abilities to whirl through the rocky wastes in a world that hides its brightest stars deep underground.</p>

      <Link href="/"><a className={styles.link}>- Back -</a></Link>
    </div>
  );
}

export default Game2;