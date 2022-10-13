import React from 'react';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import styles from "./Topbar.module.css"; 

const Topbar = () => {
    return (
        <div className={styles.conatiner}>
            <Logo />
            <Menu />
        </div>
    );
};

export default Topbar;