import React from 'react';
import styles from "./Card.module.css";

type CardProps = {
    children: any
};

const Card = ({children}: CardProps) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
};

export default Card;