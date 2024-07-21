
import React from 'react'
import Link from 'next/link'

export default async function Destination() {
    return (
        <ul className='max-w-[514px] flex pt-7 lg:pt-2 uppercase cursor-pointer justify-around text-center'>
            <Link href={"/destination"}><li className="pr-2 lg:pr-8">Moon</li></Link>
            <Link href={"/destination/mars"}><li className="pr-2 lg:pr-8">Mars</li></Link>
            <Link href={"/destination/europa"}><li className="pr-2 lg:pr-8">Europa</li></Link >
            <Link href={"/destination/titan"}><li >Titan</li></Link>
        </ul >
    )
}