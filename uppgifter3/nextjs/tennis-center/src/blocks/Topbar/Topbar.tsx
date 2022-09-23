import React from 'react';
import styles from "./Topbar.module.css";
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import Link from 'next/link';

const menuItems = [
    {label: "Hem", href: "/"},
    {label: "Nyheter", href: "/news"},
    {label: "Bokning", href: "/booking"},
    {label: "Prislista", href: "/pricelist"},
    {label: "Kurser", href: "/courses"},
    {label: "Öppettider", href: "/openhours"},
    {label: "Kontaktuppgifter", href: "/contacts"},
    {label: "Allmänt", href: "/overall"}
];

const Topbar = () => {
  return (
    <div className={styles.container}>
        <Logo />
        <Menu>
            {menuItems.map((item) => (
                <Link href={item.href}>{item.label}</Link>
            ))}
        </Menu>
    </div>
  );
};

export default Topbar;