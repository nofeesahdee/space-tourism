import Navbar from "@/components/navbar";
import Image from "next/image";
import image from "@/starter-code/assets/destination/image-mars.png"
import Destination from "@/components/destination-nav";

export default async function Home() {
    return (
        <main className="bg-[url('../starter-code/assets/destination/background-destination-mobile.jpg')]
        md:bg-[url('../starter-code/assets/destination/background-destination-tablet.jpg')] 
        lg:bg-[url('../starter-code/assets/destination/background-destination-desktop.jpg')] 
        min-h-[100vh] text-white">
            <div className="py-10" >
                <Navbar />
                <div className="flex flex-col p-6 md:p-10 lg:p-12">
                    <div className="text-base md:text-xl lg:text-[28px] uppercase title font-regular"><span className="font-bold opacity-20">01</span> Pick a destination</div>
                    < div className="flex flex-col items-center lg:flex-row lg:justify-between pt-12" >
                        <Image src={image} alt={""} width={480} height={480} />
                        < div className="tracking-[1px] lg:w-1/2 lg:text-left text-center w-full mb-12 lg:mb-0" >
                            <Destination />
                            <h1 className="text-[80px] md:text-[144px] lg:text-8xl uppercase py-6 lg:py-10">Mars</h1>
                            <p className="text-base lg:text-lg text-[#D0D6F9] md:px-6 lg:px-0 pb-6 lg:pb-10 w-[445px] ">
                                Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                            </p>
                            <div className="w-[445px] h-[1px] bg-[#979797]"></div>
                            <div className="flex flex-col md:flex-row justify-between pt-6 lg:pt-10 md:w-[445px]">
                                <div className="uppercase">
                                    <small className="text-sm tracking-[2px]">Avg. distance</small><br />
                                    <span className="text-[28px]">225 mil. km</span>
                                </div>
                                <div className="uppercase tracking-[2px]">
                                    <small className="text-sm">Est. travel time</small><br />
                                    <span className="text-[28px]">9 months</span>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div >
        </main >
    );
}