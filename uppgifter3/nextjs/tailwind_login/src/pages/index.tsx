import Head from 'next/head'
import Image from 'next/image'
import Login from '../blocks/Login/Login'
import Topbar from '../blocks/Topbar/Topbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-fit min-h-screen">
        <Topbar />
        <main className='flex justify-center items-center min-h-screen'>
          <Login />
        </main>
    </div>
  )
}
