import Navbar from "@/components/navbar";
import Image from "next/image";
import image from "@/starter-code/assets/technology/image-spaceport-portrait.jpg"
import Technology from "@/components/technology-nav";

export default async function Home() {
    return (
        <main className="bg-[url('../starter-code/assets/technology/background-technology-mobile.jpg')]
        md:bg-[url('../starter-code/assets/technology/background-technology-tablet.jpg')] 
        lg:bg-[url('../starter-code/assets/technology/background-technology-desktop.jpg')] 
        min-h-[100vh] text-white">
            <div className="pt-10" >
                <Navbar />
                <div className="flex flex-col p-6 lg:pl-12">
                    <div className="text-center md:text-left tracking-[2px] text-base md:text-xl lg:text-[28px] uppercase title font-regular pt-4 mb-6"><span className="font-bold opacity-20"> 03 </span>Space launch 101</div>
                    < div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between" >
                        < div className="flex flex-col lg:flex-row tracking-[1px] lg:w-1/2 justify-center items-center text-center lg:text-left" >
                            <Technology />
                            <div>
                                <h1 className="text-2xl lg:text-[40px] uppercase pb-6"><span className="text-lg lg:text-2xl opacity-20"> The terminology...  </span><br />
                                    Spaceport
                                </h1>
                                <p className="text-base lg:text-lg text-[#D0D6F9] md:px-6 lg:px-0 pb-6 lg:pb-10 ">
                                    A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,
                                    by analogy to the seaport for ships or airport for aircraft. Based in the
                                    famous Cape Canaveral, our spaceport is ideally situated to take advantage
                                    of the Earth’s rotation for launch.
                                </p>
                            </div>
                        </div>
                        <Image src={image} alt={""} width={400} height={400} />
                    </div >
                </div>
            </div >
        </main >
    );
}