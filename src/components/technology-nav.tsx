"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Technology() {
    const currentPath = usePathname();

    return (
        <ul className='flex lg:flex-col cursor-pointer text-lg lg:mr-16 pt-8'>
            <Link href={"/technology"} className={currentPath === "/technology" ? "bg-white text-black rounded-full w-[40px] h-[40px] mb-8 mr-4 lg:mr-0" : ""} ><li className="flex items-center justify-center w-[40px] h-[40px] rounded-full mb-8 border-2 mr-4 lg:mr-0">1</li></Link>
            <Link href={"/technology/spaceport"} className={currentPath === "/technology/spaceport" ? "bg-white text-black rounded-full w-[40px] h-[40px] mb-8 mr-4 lg:mr-0" : ""}><li className="flex items-center justify-center w-[40px] h-[40px] rounded-full mb-8 border-2 mr-4 lg:mr-0">2</li></Link>
            <Link href={"/technology/spacecapsule"} className={currentPath === "/technology/spacecapsule" ? "bg-white text-black rounded-full w-[40px] h-[40px] mb-8 mr-4 lg:mr-0" : ""}><li className="flex items-center justify-center w-[40px] h-[40px] rounded-full mb-8 border-2">3</li></Link>
        </ul >
    )
}