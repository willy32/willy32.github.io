import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from "./Menu.module.css";

type MenuProps = {
    className?: string
    vertical?: boolean
};

const menuItems = [
    {label: "Dog", href: "/dog"},
    {label: "Cat", href: "/cat"},
    {label: "Elephant", href: "/elephant"},
];

const Menu = ({className, vertical}: MenuProps) => {
    const {pathname} = useRouter();

    const isActive = (href: string) => {
        return pathname.startsWith(href);
    }

  return (
    <ul className={styles.container + " " + (className ? className : "") + " " + (vertical ? styles.vertical : "")}>
        {
            menuItems.map((item) => (
                <li key={item.href} className={isActive(item.href) ? styles.active : ""}>
                    <Link href={item.href}>{item.label}</Link>
                </li>
            ))
        }
    </ul>
  );
};

export default Menu;