import React from 'react';
import styles from "./Menu.module.css";

type MenuProps = {
    children: any
}

const Menu = ({children}: MenuProps) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
};

export default Menu;