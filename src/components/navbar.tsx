"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../starter-code/assets/shared/logo.svg'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from 'react-icons/ai'
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const currentPath = usePathname();
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='flex justify-between ml-6 lg:ml-12 text-base'>
            < div className='self-center' >
                <Image src={Logo} alt={'logo'} width={40} height={40} />
            </div >

            <div className='lg:flex bg-white/[.05] px-8 lg:px-16 justify-between items-center uppercase cursor-pointer hidden' >
                <Link href={'/'} className={currentPath === "/" ? "border-b-2 border-white font-bold py-3 mx-4" : " py-3 mx-4"} ><span className='pr-1 font-bold'> 00 </span>Home</Link>
                <Link href={'/destination'} className={currentPath === "/destination" ? "border-b-2 border-white font-bold py-3 mx-4" : " py-3 mx-4"}><span className='pr-1 font-bold'> 01 </span > Destination</Link>
                <Link href={'/crew'} className={currentPath === "/crew" ? "border-b-2 border-white font-bold py-3 mx-4" : "py-3 mx-4"}><span className='pr-1 font-bold'> 02 </span > Crew</Link >
                <Link href={'/technology'} className={currentPath === "/technology" ? "border-b-2 border-white font-bold py-3 mx-4" : " py-3 mx-4"}><span className='pr-1 font-bold'> 03 </span>Technology</Link>
            </div >

            <div className='text-2xl text-white cursor-pointer lg:hidden mr-6' onClick={() => setToggle(prev => !prev)}>
                {toggle ? <AiOutlineClose className='absolute right-4 z-10' /> : <GiHamburgerMenu />}
            </div>

            {toggle && <div className='w-full  lg:hidden'>
                <div className='w-[254px] container bg-black flex flex-col gap-6 py-32 px-8 absolute right-0 top-0 h-screen uppercase'>
                    <Link href={'/'} className={currentPath === "/" ? "border-2 border-white font-bold" : "py-3 w-full"} ><span className='pr-1 font-bold'> 00 </span>Home</Link>
                    <Link href={'/destination'} className={currentPath === "/destination" ? "border-2 border-white font-bold" : " py-3 w-full"}><span className='pr-1 font-bold'> 01 </span > Destination</Link>
                    <Link href={'/crew'} className={currentPath === "/crew" ? "border-2 border-white font-bold" : "py-3 w-full"}><span className='pr-1 font-bold'> 02 </span > Crew</Link >
                    <Link href={'/technology'} className={currentPath === "/technology" ? "border-2 border-white font-bold" : " py-3 w-full"}><span className='pr-1 font-bold'> 03 </span>Technology</Link>
                </div>
            </div>}
        </nav >
    )
}