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
                <section className="flex flex-col gap-14 justify-center items-center text-white top-20 relative">
                    <div className="border border-red-600 w-80 h-60 rounded-xl shadow-2xl">
                        <div className="flex justify-center items-center top-28 relative">
                            <button className="border border-red-600 rounded-xl px-4 py-1">Choose Item</button>
                        </div>
                    </div>

                    <form className="flex flex-col  gap-6" action="" method="get">
                        <input className="shadow-2xl border-4 rounded-xl border-red-800 w-96 h-14 px-4 bg-black" type="text" placeholder="Upload Item Serial Number." />
                        <input className="shadow-2xl border-4 rounded-xl border-red-800 w-96 h-14 px-4 bg-black" type="text" placeholder="Item Name" />
                        <input className="shadow-2xl border-4 rounded-xl border-red-800 w-96 h-14 px-4 bg-black" type="text" placeholder="Generating Item ID" />
                        <div className="flex flex-row justify-center gap-6">
                            <button className="shadow-2xl bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-2">Verify Item</button>
                            <button className="shadow-2xl flex gap-3 items-center border-2 border-red-600 rounded-2xl  px-8 py-2 ">BACK <a className="text-red-600 text-2xl" href=""><TbArrowBackUp /></a> </button>
                        </div>
                    </form>
                    <div></div>

                </section>
            </section>
         
        </div>
    );
}
