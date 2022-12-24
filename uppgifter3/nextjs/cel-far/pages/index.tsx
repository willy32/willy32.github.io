import { Input } from '@nextui-org/react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [numToConvert, setNumToConvert] = useState(0.0);

  return (
    <div className={styles.container}>
      <h1>Celsius to Farenheit</h1>
      <Input placeholder="Celsius" type="number" onChange={(e) => {
        setNumToConvert((parseFloat(e.target.value) * 1.8 + 32));
      }} />
      <span>Farenheit: {numToConvert}</span>
    </div>
  )
}