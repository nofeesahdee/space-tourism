import Navbar from "@/components/navbar";
import Image from "next/image";
import image from "@/starter-code/assets/crew/image-anousheh-ansari.png"
import Crew from "@/components/crew-nav";

export default async function Home() {
    return (
        <main className="bg-[url('../starter-code/assets/crew/background-crew-mobile.jpg')]
        md:bg-[url('../starter-code/assets/crew/background-crew-tablet.jpg')] 
        lg:bg-[url('../starter-code/assets/crew/background-crew-desktop.jpg')] 
        min-h-[100vh] text-white">
            <div className="pt-10" >
                <Navbar />
                <div className="flex flex-col p-6 md:px-10 lg:px-12">
                    <div className="text-center md:text-left tracking-[2px] text-base md:text-xl lg:text-[28px] uppercase title font-regular mt-4"><span className="font-bold opacity-20">02</span> Meet your crew</div>
                    < div className="flex flex-col items-center lg:flex-row lg:justify-between" >
                        < div className="tracking-[1px] lg:w-1/2 lg:text-left text-center w-full mb-12 lg:mb-0" >
                            <h1 className="text-2xl md:text-[40px] lg:text-[56px] uppercase pb-6"><span className="text-lg md:text-2xl lg:text-[32px] opacity-20 pb-4"> Flight Engineer</span><br /><br />
                                Anousheh Ansari
                            </h1>
                            <p className="text-base lg:text-lg text-[#D0D6F9] md:px-6 lg:px-0 pb-6 lg:pb-10 lg:w-[539px] ">
                                Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                                Ansari was the fourth self-funded space tourist, the first self-funded woman to
                                fly to the ISS, and the first Iranian in space.
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