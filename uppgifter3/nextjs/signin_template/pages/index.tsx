import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  fetch("http://localhost:3000/api/auth")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

  const save = (jsonStr:string):void => {
    fetch("http://localhost:3000/api/auth", {
      method:"POST",
      body: jsonStr
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  }

  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <button onClick={() => save(JSON.stringify({message: "Willy"}))}>Save</button>
    </div>
  );
};

export default Home;
