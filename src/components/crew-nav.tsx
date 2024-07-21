
import React from 'react'
import Link from 'next/link'

export default async function Crew() {
    return (
        <ul className='flex pt-7 lg:pt-2 uppercase cursor-pointer'>
            <Link href={"/crew"}><li className="mr-2 lg:mr-8 bg-white w-[15px] h-[15px] rounded-full opacity-20"></li></Link>
            <Link href={"/crew/mark"}><li className="mr-2 lg:mr-8 bg-white w-[15px] h-[15px] rounded-full opacity-20"></li></Link>
            <Link href={"/crew/victor"}><li className="mr-2 lg:mr-8 bg-white w-[15px] h-[15px] rounded-full opacity-20"></li></Link>
            <Link href={"/crew/ansari"}><li className="mr-2 lg:mr-8 bg-white w-[15px] h-[15px] rounded-full opacity-20"></li ></Link>
        </ul >
    )
}