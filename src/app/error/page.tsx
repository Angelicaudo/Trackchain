import Image from "next/image";
import { TbArrowBackUp } from "react-icons/tb";



export default function Home() {
    return (
        <div className=" bg-black">
            <section className="bg-heroImg bg-cover bg-center h-screen bg-repeat">
                <nav className="flex justify-evenly sm:justify-between items-center	 px-0 sm:px-24 py-4">
                    <div>
                        <Image src="/logooo.png" alt={"img"} height={"160"} width={"160"} />
                    </div>
                    <div>
                        <button className=" text-white border rounded-2xl p-2 border-red-600">CONNECT WALLET </button>
                    </div>
                </nav>

                <section className="flex flex-col gap-14 justify-center items-center text-white text-center top-32 relative">
                    <div className="flex flex-col gap-4">
                        <Image src="/OOPs.png" alt={"img"} height={"500"} width={"500"} />
                        <div>
                            <p> Item not verify on Chain </p>
                        </div>
                      
                    </div>

                    <div className="flex flex-row gap-6">
                        <button className="bg-red-700 border-2 border-red-600 rounded-2xl px-6 py-1">Verify Item</button>
                        <button className=" flex gap-3 items-center border-2 border-red-600 rounded-2xl px-8 py-1">BACK <a className="text-red-600 text-xl" href=""><TbArrowBackUp /></a> </button>
                    </div>
                </section>

            </section>




        </div>
    );
}
