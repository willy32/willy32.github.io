import React from 'react';
import styles from "./Storycard.module.css";

type LeftSideProps = {
    children: any
};

const LeftSide = ({children}: LeftSideProps) => {
  return (
    <div className={styles.leftside}>
        {children}
    </div>
  );
};

export default LeftSide;