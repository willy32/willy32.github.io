import Link from 'next/link'
import React from 'react'
import Logo from './Logo/Logo'

const Topbar = () => {
  return (
    <div className="p-4 bg-purple-600 bg-opacity-75 flex justify-between items-center w-full">
        <Logo />
        <div className="flex space-x-2">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
        </div>
    </div>
  )
}

export default Topbar