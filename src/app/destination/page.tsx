import Navbar from "@/components/navbar";
import Image from "next/image";
import Destination from "@/components/destination-nav";
import image from "@/starter-code/assets/destination/image-moon.png"

export default async function Home() {
    return (
        <main className="bg-[url('../starter-code/assets/destination/background-destination-mobile.jpg')]
        md:bg-[url('../starter-code/assets/destination/background-destination-tablet.jpg')] 
        lg:bg-[url('../starter-code/assets/destination/background-destination-desktop.jpg')] 
        min-h-[100vh] text-white">
            <div className="py-10" >
                <Navbar />
                <div className="flex flex-col p-6 md:p-10 lg:p-12">
                    <div className="text-center md:text-left tracking-[2px] text-base md:text-xl lg:text-[28px] uppercase title font-regular"><span className="font-bold opacity-20">01</span> Pick a destination</div>
                    < div className="flex flex-col items-center lg:flex-row lg:justify-between pt-12" >
                        <Image src={image} alt={""} width={400} height={400} />
                        < div className="tracking-[1px] lg:w-1/2 lg:text-left text-center w-full mb-12 lg:mb-0" >
                            <Destination />
                            <h1 className="text-[80px] lg:text-8xl uppercase py-6 lg:py-10">Moon</h1>
                            <p className="text-base lg:text-lg text-[#D0D6F9] lg:px-0 pb-6 lg:pb-10 lg:w-[445px] ">
                                See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                            </p>
                            <div className="lg:max-w-[445px] h-[1px] bg-[#979797]"></div>
                            <div className="flex flex-col md:flex-row justify-between pt-6 lg:pt-10 lg:max-w-[445px]">
                                <div className="uppercase tracking-[2px] mb-6 md:mb-0">
                                    <small className="text-[12px] tracking-[2px]">Avg. distance</small><br />
                                    <span className="text-[28px]">384,400 km</span>
                                </div>
                                <div className="uppercase tracking-[2px]">
                                    <small className="text-[12px]">Est. travel time</small><br />
                                    <span className="text-[28px]">3 days</span>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div >
        </main >
    );
}