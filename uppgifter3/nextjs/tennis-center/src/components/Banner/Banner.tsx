import { StaticImageData } from 'next/image';
import React from 'react';
import styles from "./Banner.module.css"

type BannerProps = {
    children: any
    img: string
}

const Banner = ({children, img}: BannerProps) => {
  return (
    <div className={styles.banner} style={{backgroundImage: `url(${img})`}}>
        <div className={styles.overlay}>
            {children}
        </div>
    </div>
  );
};

export default Banner;