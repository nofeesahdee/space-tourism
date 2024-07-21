import Image from 'next/image'
import React from 'react'
import Logo from '../starter-code/assets/shared/logo.svg'
import Link from 'next/link'

export default async function Navbar() {
    return (
        <div className='flex justify-between ml-6 lg:ml-12 text-base'>
            <div className='self-center'>
                <Image src={Logo} alt={'logo'} width={40} height={40} />
            </div>

            <ul className='lg:flex bg-white/[.05] px-8 lg:px-16 py-2 justify-between items-center uppercase cursor-pointer hidden' >
                <Link href={'/'} ><li className='ml-8'><span className='pr-1 font-bold'> 00 </span>Home</li></Link>
                <Link href={'/destination'} ><li className='ml-8'><span className='pr-1 font-bold'> 01 </span > Destination</li></Link>
                <Link href={'/crew'} ><li className='ml-8'><span className='pr-1 font-bold'> 02 </span > Crew</li></Link>
                <Link href={'/technology'} ><li className='ml-8'><span className='pr-1 font-bold'> 03 </span>Technology</li></Link>
            </ul >
        </div >
    )
}