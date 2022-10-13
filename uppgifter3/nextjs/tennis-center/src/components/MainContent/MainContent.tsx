import React from 'react';
import styles from "./MainContent.module.css"

type MainContentProps = {
    children: any
}

const MainContent = ({children}: MainContentProps) => {
  return (
    <main className={styles.container}>
        {children}
    </main>
  );
};

export default MainContent;