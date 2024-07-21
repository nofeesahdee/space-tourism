import Navbar from "@/components/navbar";
import image from "@/starter-code/assets/destination/image-moon.png"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="bg-[url('../starter-code/assets/home/background-home-mobile.jpg')]
      md:bg-[url('../starter-code/assets/home/background-home-tablet.jpg')] 
      lg:bg-[url('../starter-code/assets/home/background-home-desktop.jpg')] 
      min-h-[100vh] text-white"
    >
      < div className="py-10" >
        <Navbar />
        <div className="flex flex-col items-center p-6 md:pt-28 lg:py-0 lg:flex-row lg:px-28 lg:justify-between lg:items-baseline">
          <div className="tracking-[1px] lg:w-1/2 lg:text-left text-center w-full mb-12 lg:mb-0">
            <span className="tracking-[2px] uppercase text-base md:text-[28px] text-[#D0D6F9]"> So, you want to travel to</span>
            <h1 className="text-[80px] md:text-[144px] lg:text-8xl uppercase py-6">Space</h1>
            <p className="text-sm md:text-base lg:text-lg text-[#D0D6F9] md:px-6 lg:px-0">
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className="mb-0">
            <button className="w-[144px] h-[144px] text-lg md:w-[272px] md:h-[272px] bg-white text-black rounded-full uppercase lg:text-[32px]"><Link href={`/destination`}>Explore</Link> </button>
          </div>
        </div>
      </div >
    </main >
  );
}
