import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PasswordIcon from '../../components/Logo/PasswordIcon';
import UserIcon from '../../components/Logo/UserIcon';
import img from "../../../public/images/sideimg.png";

const Login = () => {
  return (
    <div className="flex justify-center lg:justify-around self-center">
        <div className="flex flex-col justify-center p-8 py-0 space-y-6 w-full max-w-lg">
            <h1 className="text-3xl font-semibold">Sign in</h1>
            <form className="flex flex-col space-y-2" method="post">
                <label htmlFor="">Username</label>
                <div className='flex space-x-2'><UserIcon/><input className="w-full" type="text" placeholder="Type your username"/></div>
                <hr />
                <label htmlFor="">Password</label>
                <div className='flex space-x-2'><PasswordIcon/><input className="w-full" type="text" placeholder="Type your password"/></div>
                <hr />
                <span className="text-gray-400 self-end"><Link href={"/reset"}>Forgot password?</Link></span>
                <div><button className="bg-yellow-700 opacity-80 rounded-full p-4 px-12 text-white max-w-fit my-4" type="submit">Sign in</button></div>
            </form>
            <div className="flex">
                <span className="text-gray-400">Don't have an account? <span className='text-purple-700 font-semibold'><Link href={"/register"}>Register now</Link></span></span>
            </div>
        </div>
        <div className="hidden w-full lg:flex max-w-3xl">
            <Image src={img} layout="responsive" alt="Side image"/>
        </div>
    </div>
  );
};

export default Login;