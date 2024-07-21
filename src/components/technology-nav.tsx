
import React from 'react'
import Link from 'next/link'

export default async function Technology() {
    return (
        <ul className='flex flex-col cursor-pointer text-[32px] mr-16 text-center'>
            <Link href={"/technology"}><li className="w-[80px] h-[80px] rounded-full mb-8 border-2 items-center">1</li></Link>
            <Link href={"/technology/spaceport"}><li className="w-[80px] h-[80px] rounded-full mb-8 border-2">2</li></Link>
            <Link href={"/technology/spacecapsule"}><li className="w-[80px] h-[80px] rounded-full mb-8 border-2">3</li></Link>
        </ul >
    )
}