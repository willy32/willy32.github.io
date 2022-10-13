import React from 'react';
import styles from "./Storycard.module.css";

type StorycardProps = {
    children: any
};

const Storycard = ({children}: StorycardProps) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
};

export default Storycard;