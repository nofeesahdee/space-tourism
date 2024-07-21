import Navbar from "@/components/navbar";
import Image from "next/image";
import Destination from "@/components/destination-nav";
import image from "@/starter-code/assets/technology/image-launch-vehicle-portrait.jpg"
import Crew from "@/components/crew-nav";
import Technology from "@/components/technology-nav";

export default async function Home({ params }: { params: any }) {
    return (
        <main className="bg-[url('../starter-code/assets/technology/background-technology-mobile.jpg')]
        md:bg-[url('../starter-code/assets/technology/background-technology-tablet.jpg')] 
        lg:bg-[url('../starter-code/assets/technology/background-technology-desktop.jpg')] 
        min-h-[100vh] text-white">
            <div className="pt-10" >
                <Navbar />
                <div className="flex flex-col p-6 md:px-10 lg:pl-12">
                    <div className="text-center md:text-left tracking-[2px] text-base md:text-xl lg:text-[28px] uppercase title font-regular pt-4 mb-6"><span className="font-bold opacity-20">03</span>Space launch 101</div>
                    < div className="flex flex-col items-center lg:flex-row lg:justify-between" >
                        < div className="flex tracking-[1px] lg:w-1/2 " >
                            <Technology />
                            <div>
                                <h1 className="text-2xl md:text-[40px] lg:text-[56px] uppercase pb-6"><span className="text-lg md:text-2xl lg:text-[32px] opacity-20 pb-4"> The terminology...</span><br /><br />
                                    Launch vehicle
                                </h1>
                                <p className="text-base lg:text-lg text-[#D0D6F9] md:px-6 lg:px-0 pb-6 lg:pb-10 lg:w-[539px] ">
                                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                                    it's quite an awe-inspiring sight on the launch pad!
                                </p>
                            </div>
                        </div>
                        <Image src={image} alt={""} width={480} height={480} />
                    </div >
                </div>
            </div >
        </main >
    );
}