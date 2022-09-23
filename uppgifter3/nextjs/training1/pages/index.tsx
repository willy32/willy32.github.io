import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CircleButton from "../components/CircleButton";
import Alert from '../components/Alert';
import Calculator from '../components/Calculator';
import List from '../components/List';
import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tabs/Tab';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Tabs>
        <Tab label="Home">Welcome to Home</Tab>
        <Tab label="Order">Welcome to Order</Tab>
        <Tab label="About">Welcome to About</Tab>
      </Tabs>
    </div>
  );
};

export default Home;
