import React, { useState } from 'react';
import styles from "./Menu.module.css";

type MenuProps = {
    children: any
    toggleButtonLabel: string
}

const Menu: React.FC<MenuProps> = ({children, toggleButtonLabel}: MenuProps) => {

  const [toggled, setToggled] = useState(false);

  const toggleMenu = () => {
    setToggled(!toggled);
  }

  return (
    <>
      <button onClick={toggleMenu} className={styles.btnToggle}>{toggleButtonLabel}</button>
      <div className={styles.container + " " + (toggled ? styles.toggled : "")}>
        <button onClick={toggleMenu} className={styles.btnToggle1}>X</button>
        {children}
      </div>
    </>
  );
};

export default Menu;