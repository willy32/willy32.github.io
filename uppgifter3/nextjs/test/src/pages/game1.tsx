import type { NextPage } from 'next';
import Link from "next/link";
import Image from 'next/image'
import styles from "./../styles/index.module.css";
import img1 from "../assets/minecraft.png";

const Game1: NextPage = () => {
  return (
    <div className={styles.container}>
    <Image src={img1}/>
      <p>Minecraft är ett äventyrs- och byggdatorspel. I Minecraft får spelaren utforska och omvandla en värld byggd av kubikmeterstora block. Förutom block består världen också av växter, varelser och föremål. Spelet är väldigt öppet, så man kan göra i princip vad man vill i sin värld.</p>

      <Link href="/"><a className={styles.link}>- Back -</a></Link>
    </div>
  );
}

export default Game1;
