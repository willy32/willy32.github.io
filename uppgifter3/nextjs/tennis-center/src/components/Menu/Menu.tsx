import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from "./Menu.module.css";

type MenuProps = {
  vertical?: boolean
};

const menuItems = [
  {label: "Hem", href: "/"},
  {label: "Nyheter", href: "/news"},
  {label: "Bokning", href: "https://playtomic.io/wl/e7ca04ef-22b1-4b8d-8e1d-0812485f3e7f?&fromPartners=true"},
  {label: "Prislista", href: "/pricelist"},
  {label: "Kurser", href: "/courses"},
  {label: "Öppettider", href: "/openhours"},
  {label: "Kontaktuppgifter", href: "/contacts"}
];

const Menu = ({vertical}: MenuProps) => {
  const {pathname} = useRouter();

  return (
    <div className={styles.container + " " + (vertical ? styles.vertical : "")}>
        {menuItems.map((item) => (
          pathname == item.href ? <Link href={item.href}><b>{item.label}</b></Link> : <Link href={item.href}>{item.label}</Link>
        ))}
    </div>
  );
};

export default Menu;