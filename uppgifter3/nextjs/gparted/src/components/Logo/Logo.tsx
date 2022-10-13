import Image from 'next/image';
import React from 'react';
import styles from "./Logo.module.css";
import logoImg from "../../../public/gparted_logo.png";
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={"/"}>
            <div className={styles.container}>
                <Image src={logoImg} width={"50"} height={"50"} />
                <h1>GParted</h1>
            </div>
        </Link>
    );
};

export default Logo;