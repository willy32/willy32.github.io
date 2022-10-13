import React from 'react';
import styles from "./Storycard.module.css";

type RightSideProps = {
    children: any
};

const RightSide = ({children}: RightSideProps) => {
  return (
    <div className={styles.rightside}>
        {children}
    </div>
  );
};

export default RightSide;