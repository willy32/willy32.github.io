import Link from 'next/link';
import React from 'react';
import styles from "./Menu.module.css";

type MenuObjectProps = {
    label: string,
    href: string
};

const MenuContent:MenuObjectProps[] = [
    {label: "Home", href: "/"},
    {label: "Download", href: "/download"},
    {label: "Live CD/USB", href: "/liveusb"},
    {label: "Help", href: "/help"},
    {label: "News", href: "/news"},
    {label: "Develop", href: "/develop"},
    {label: "Donate", href: "/donate"}
]

const Menu = () => {
    return (
        <div className={styles.container}>
            {
                MenuContent.map((menuObject) => (
                    <Link href={menuObject.href}>{menuObject.label}</Link>
                ))
            }
        </div>
    );
};

export default Menu;