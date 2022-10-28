import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Topbar from '../blocks/Topbar/Topbar'
import Card from '../components/Card/Card'
import styles from '../styles/Home.module.css'
import products from "../../products.json";

const Home: NextPage = () => {
  return (
    <div className={""}>
      <Topbar />
      <main className="flex flex-wrap justify-center items-center m-4">
        {
          products.map((product) => (
            <Card id={product.id} title={product.title} img={product.img} description={product.description} price={product.price}/>
          ))
        }
      </main>
    </div>
  )
}

export default Home
