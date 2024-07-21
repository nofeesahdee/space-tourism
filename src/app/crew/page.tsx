import Navbar from "@/components/navbar";
import Image from "next/image";
import Destination from "@/components/destination-nav";
import image from "@/starter-code/assets/crew/image-douglas-hurley.png"
import Crew from "@/components/crew-nav";

export default async function Home({ params }: { params: any }) {
    return (
        <main className="bg-[url('../starter-code/assets/crew/background-crew-mobile.jpg')]
        md:bg-[url('../starter-code/assets/crew/background-crew-tablet.jpg')] 
        lg:bg-[url('../starter-code/assets/crew/background-crew-desktop.jpg')] 
        min-h-[100vh] text-white">
            <div className="pt-10" >
                <Navbar />
                <div className="flex flex-col p-6 md:px-10 lg:px-12">
                    <div className="text-center md:text-left tracking-[2px] text-base md:text-xl lg:text-[28px] uppercase title font-regular pt-4 mb-6"><span className="font-bold opacity-20">02</span> Meet your crew</div>
                    < div className="flex flex-col items-center lg:flex-row lg:justify-between" >
                        < div className="tracking-[1px] lg:w-1/2 lg:text-left text-center w-full mb-12 lg:mb-0 text-center" >
                            <h1 className="text-2xl md:text-[40px] lg:text-[56px] uppercase pb-6"><span className="text-lg md:text-2xl lg:text-[32px] opacity-20 pb-4">Commander</span><br /><br />
                                Douglas Hurley
                            </h1>
                            <p className="text-base lg:text-lg text-[#D0D6F9] md:px-6 lg:px-0 pb-6 lg:pb-10 lg:w-[539px] ">
                                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                                and former NASA astronaut. He launched into space for the third time as
                                commander of Crew Dragon Demo-2.
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