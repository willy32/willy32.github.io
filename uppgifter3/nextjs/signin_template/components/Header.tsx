import React from 'react';
import Link from "next/link";
import Image from "next/image"
import styles from '../styles/Layout.module.css'; 
import img1 from "../public/vercel.png";

const Header = () => {
  return (
    <div className={styles.header}>
        <Image src={img1} width={"100%"} height={"25%"}></Image>
        <div className={styles.headerRightSide}>
            <h3><Link href="/register">Register</Link></h3>
            <h3><Link href="/login">Login</Link></h3>
        </div>
    </div>
  )
}

export default Header