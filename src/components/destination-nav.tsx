"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Destination() {
    const currentPath = usePathname();

    return (
        <ul className='flex pt-7 lg:pt-2 uppercase cursor-pointer text-center '>
            <Link href={"/destination"} className={currentPath === "/destination" ? "border-b-2 border-white font-bold pb-1 mr-2 lg:mr-8" : "mr-2 lg:mr-8"}>Moon</Link>
            <Link href={"/destination/mars"} className={currentPath === "/destination/mars" ? "border-b-2 border-white font-bold pb-1 mr-2 lg:mr-8" : "mr-2 lg:mr-8"}>Mars</Link>
            <Link href={"/destination/europa"} className={currentPath === "/destination/europa" ? "border-b-2 border-white font-bold pb-1 mr-2 lg:mr-8" : " mr-2 lg:mr-8"}>Europa</Link >
            <Link href={"/destination/titan"} className={currentPath === "/destination/titan" ? "border-b-2 border-white font-bold pb-1 mr-2 lg:mr-8" : "mr-2 lg:mr-8"}>Titan</Link>
        </ul >
    )
}