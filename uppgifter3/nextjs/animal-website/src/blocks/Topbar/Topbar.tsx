import React from 'react';
import MenuIcon from '../../components/Icons/MenuIcon';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import styles from "./Topbar.module.css"

type TopbarProps = {
  onDrawerButtonClick: () => void
}

const Topbar = ({onDrawerButtonClick} : TopbarProps) => {
  return (
    <div className={styles.container}>
        <Logo />
        <Menu className={styles.menu}/>
        <button className={styles.drawerButton} onClick={onDrawerButtonClick}><MenuIcon /></button>
    </div>
  );
};

export default Topbar;