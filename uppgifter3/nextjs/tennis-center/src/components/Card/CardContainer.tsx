import React from 'react';
import styles from "./Card.module.css"

type CardContainerProps = {
    children: any
}

const CardContainer = ({children}: CardContainerProps) => {
  return (
    <div className={styles.cardContainer}>
        {children}
    </div>
  );
};

export default CardContainer;