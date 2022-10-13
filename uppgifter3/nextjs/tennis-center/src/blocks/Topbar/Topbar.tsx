import React, { useEffect, useState } from 'react';
import styles from "./Topbar.module.css";
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import Link from 'next/link';
import Drawer from '@jahlgren/react-drawer';
import { useRouter } from 'next/router';
import MenuIcon from '../../components/Icons/MenuIcon';

const Topbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {pathname} = useRouter();

  console.log(pathname)

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  return (
    <>
    <div className={styles.container}>
        <Logo />
        <Menu />
        <button className={styles.drawerButton} onClick={() => setIsDrawerOpen(!isDrawerOpen)}><MenuIcon /></button>
    </div>
    <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Menu vertical/>
    </Drawer>
    </>
    
  );
};

export default Topbar;