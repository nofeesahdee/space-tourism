import Navbar from "@/components/navbar";
import Image from "next/image";
import image from "@/starter-code/assets/crew/image-mark-shuttleworth.png"
import Crew from "@/components/crew-nav";

export default async function Home() {
    return (
        <main className="bg-[url('../starter-code/assets/crew/background-crew-mobile.jpg')]
        md:bg-[url('../starter-code/assets/crew/background-crew-tablet.jpg')] 
        lg:bg-[url('../starter-code/assets/crew/background-crew-desktop.jpg')] 
        min-h-[100vh] text-white">
            <div className="pt-10" >
                <Navbar />
                <div className="flex flex-col p-6 md:px-10 lg:p-12">
                    <div className="text-center md:text-left tracking-[2px] text-base md:text-xl lg:text-[28px] uppercase title font-regular my-4"><span className="font-bold opacity-20">02</span> Meet your crew</div>
                    < div className="flex flex-col items-center lg:flex-row lg:justify-between" >
                        < div className="tracking-[1px] lg:w-1/2 lg:text-left text-center w-full mb-12 lg:mb-0" >
                            <h1 className="text-2xl lg:text-[40px] uppercase pb-6"><span className="text-lg lg:text-2xl opacity-20"> Mission Specialist</span><br />
                                Mark Shuttleworth
                            </h1>
                            <p className="text-base lg:text-lg text-[#D0D6F9] lg:px-0 pb-6 lg:pb-10 lg:w-[539px] ">
                                Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
                                the Linux-based Ubuntu operating system. Shuttleworth became the first South
                                African to travel to space as a space tourist.
                            </p>
                            <Crew />
                        </div>
                        <Image src={image} alt={"douglas hurley"} width={480} height={480} />
                    </div >
                </div>
            </div >
        </main >
    );
}