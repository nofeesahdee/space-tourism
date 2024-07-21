
import React from 'react'
import Link from 'next/link'

export default async function Technology() {
    return (
        <ul className='flex lg:flex-col cursor-pointer text-lg lg:mr-16 pt-8'>
            <Link href={"/technology"}><li className="flex items-center justify-center w-[40px] h-[40px] rounded-full mb-8 border-2 mr-4 lg:mr-0">1</li></Link>
            <Link href={"/technology/spaceport"}><li className="flex items-center justify-center w-[40px] h-[40px] rounded-full mb-8 border-2 mr-4 lg:mr-0">2</li></Link>
            <Link href={"/technology/spacecapsule"}><li className="flex items-center justify-center w-[40px] h-[40px] rounded-full mb-8 border-2">3</li></Link>
        </ul >
    )
}