"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Crew() {
    const currentPath = usePathname();

    return (
        <ul className='flex pt-7 lg:pt-2 cursor-pointer'>
            <Link href={"/crew"} className={currentPath === "/crew" ? "bg-white lg:mr-8 bg-white w-[15px] h-[15px] rounded-full mr-2" : ""}><li className="mr-2 lg:mr-8 bg-white w-[15px] h-[15px] rounded-full opacity-20"></li></Link>
            <Link href={"/crew/mark"} className={currentPath === "/crew/mark" ? "bg-white lg:mr-8 bg-white w-[15px] h-[15px] rounded-full mr-2" : ""}><li className="mr-2 lg:mr-8 bg-white w-[15px] h-[15px] rounded-full opacity-20"></li></Link>
            <Link href={"/crew/victor"} className={currentPath === "/crew/victor" ? "bg-white lg:mr-8 bg-white w-[15px] h-[15px] rounded-full mr-2" : ""}><li className="mr-2 lg:mr-8 bg-white w-[15px] h-[15px] rounded-full opacity-20"></li></Link>
            <Link href={"/crew/ansari"} className={currentPath === "/crew/ansari" ? "bg-white lg:mr-8 bg-white w-[15px] h-[15px] rounded-full mr-2" : ""}><li className="mr-2 lg:mr-8 bg-white w-[15px] h-[15px] rounded-full opacity-20"></li ></Link>
        </ul >
    )
}