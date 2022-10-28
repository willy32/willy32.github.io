import Link from 'next/link'
import React from 'react'
import Logo from '../../components/Logo/Logo';

const Topbar = () => {
  return (
    <div className="sm:flex-row flex-col p-4 bg-purple-800 bg-opacity-100 text-white flex flex-wrap justify-between items-center w-full shadow-xl">
        <Logo />
        <div className="flex space-x-6 text-xl">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/cart"}>Cart</Link>
        </div>
    </div>
  )
}

export default Topbar