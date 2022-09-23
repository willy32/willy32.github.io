import React from 'react';
import Link from "next/link";
import Image from "next/image"
import styles from './Layout.module.css'; 
import Menu from '../Menu/Menu';
import logo from "../../../public/vercel.png"

const Header = () => {
  return (
    <div className={styles.header}>
      <Image 
        src={logo}
        width={100}
        height={25}
      ></Image>
        <div className={styles.headerRightSide}>
            <h3><Link href="/">Lorem Home</Link></h3>
            <h3><Link href="/page1">Lorem Ipsum</Link></h3>
            <h3><Link href="/page2">Lorem</Link></h3>
        </div>
        <div className={styles.responsive}>
          <Menu toggleButtonLabel={"..."}>
            <Link href="/"><h3>Lorem Home</h3></Link>
            <Link href="/page1"><h3>Lorem Ipsum</h3></Link>
            <Link href="/page2"><h3>Lorem</h3></Link>
          </Menu>
        </div> 
    </div>
  )
}

export default Header